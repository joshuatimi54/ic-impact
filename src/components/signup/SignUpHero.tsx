import SignUpHeroImage from '@/assets/signUpHero.png';

const SignUpHero = () => {
  return (
    <div className="min-h-[30vh]  w-full flex flex-col justify-center items-center ">
      <div className="h-[100px] w-full"></div>
      <div className="max-w-[800px]">
        <img src={SignUpHeroImage} alt="img" />
      </div>
    </div>
  );
};

export default SignUpHero;
