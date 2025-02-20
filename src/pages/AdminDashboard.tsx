
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useSession } from "@/App";

interface Profile {
  id: string;
  email: string;
  referral_code: string;
  balance: number;
  created_at: string;
}

export default function AdminDashboard() {
  const [users, setUsers] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const { session } = useSession();

  useEffect(() => {
    const checkAdminStatus = async () => {
      const { data: isAdminUser, error } = await supabase
        .rpc('is_admin') as { data: boolean, error: null | Error };
      
      if (error) {
        console.error('Error checking admin status:', error);
        navigate('/');
        return;
      }

      setIsAdmin(isAdminUser);
      if (!isAdminUser) {
        toast.error("Unauthorized access");
        navigate('/');
      }
    };

    if (session) {
      checkAdminStatus();
    } else {
      navigate('/auth');
    }
  }, [session, navigate]);

  useEffect(() => {
    if (!isAdmin) return;

    const fetchUsers = async () => {
      try {
        // Fetch profiles
        const { data: profiles, error: profilesError } = await supabase
          .from('profiles')
          .select('*');

        if (profilesError) throw profilesError;

        // Fetch users to get emails
        const { data: authData, error: usersError } = await supabase.auth.admin.listUsers();
        if (usersError) throw usersError;

        // Combine the data
        const combinedData = profiles?.map(profile => {
          const user = authData.users.find(u => u.id === profile.id);
          return {
            id: profile.id,
            email: user?.email || 'N/A',
            referral_code: profile.referral_code,
            balance: profile.balance,
            created_at: profile.created_at
          };
        });

        setUsers(combinedData || []);
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Set up real-time subscription
    const channel = supabase
      .channel('admin-dashboard')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'profiles'
        },
        () => {
          fetchUsers(); // Refetch when data changes
        }
      )
      .subscribe();

    fetchUsers();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [isAdmin]);

  const handleUpdateBalance = async (userId: string, currentBalance: number) => {
    const newBalance = window.prompt('Enter new balance:', currentBalance.toString());
    if (newBalance === null) return;

    const numBalance = parseFloat(newBalance);
    if (isNaN(numBalance)) {
      toast.error('Please enter a valid number');
      return;
    }

    try {
      const { error } = await supabase
        .from('profiles')
        .update({ balance: numBalance })
        .eq('id', userId);

      if (error) throw error;
      toast.success('Balance updated successfully');
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <Card className="p-6 bg-gray-800 text-white">
          <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
          
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-white">Email</TableHead>
                    <TableHead className="text-white">Referral Code</TableHead>
                    <TableHead className="text-white">Balance</TableHead>
                    <TableHead className="text-white">Created At</TableHead>
                    <TableHead className="text-white">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="text-white">{user.email}</TableCell>
                      <TableCell className="text-white">{user.referral_code}</TableCell>
                      <TableCell className="text-white">${user.balance.toFixed(2)}</TableCell>
                      <TableCell className="text-white">
                        {new Date(user.created_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          onClick={() => handleUpdateBalance(user.id, user.balance)}
                          className="text-white hover:text-black"
                        >
                          Update Balance
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </Card>
      </main>
    </div>
  );
}
