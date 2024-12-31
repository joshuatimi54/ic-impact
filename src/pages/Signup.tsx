import Footer from '@/components/footer/Footer';
import SignUpForm from '@/components/signup/SignUpForm';
import SignUpHero from '@/components/signup/SignUpHero';
import { ToastContainer } from 'react-toastify';

const Signup = () => {
  return (
    <div>
      <ToastContainer />
      <SignUpHero />
      <SignUpForm />
      <Footer />
    </div>
  );
};

export default Signup;
