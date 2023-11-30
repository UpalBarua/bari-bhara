import { useAuthContext } from '@/context/auth-context';

const HomePage = () => {
  const { user } = useAuthContext();

  return (
    <section>
      <h1>Bari Bhara</h1>
      <p className="text-2xl">{user?.email}</p>
    </section>
  );
};

export default HomePage;
