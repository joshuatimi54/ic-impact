import Texts from '../Texts';
import workingGuy from '@/assets/workingGuy.webp';
import ContactForm from './ContactForm';

const ContactInfo = () => {
  return (
    <div>
      <div className="min-[1800px]:w-[1500px] max-[1800px]:w-[90%] mx-auto min-[900px]:flex max-[900px]:flex-col min-[900px]:items-end max-[900px]:items-center justify-between gap-[30px] my-[50px]">
        <div className="flex flex-col max-[900px]:mx-auto gap-4 max-w-[350px]">
          <Texts> Location/Address: Find us at No 4 FUTA South Gate Junction...</Texts>
          <Texts>
            <strong>For more direct or urgent communication</strong>, contact the phone
            number and/or email address below:
          </Texts>
          <Texts>
            <span>
              <strong>Call us at: +234 123 456 7890</strong>{' '}
            </span>
            <span>
              or email us at:{' '}
              <a href="mailto:support@ic-impact@gmail.com">
                <strong>support@ic-impact@gmail.com</strong>{' '}
              </a>{' '}
            </span>
          </Texts>
          <div className="max-w-[400px]">
            <img src={workingGuy} alt="img" />
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactInfo;
