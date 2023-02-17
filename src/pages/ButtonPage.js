import Button from '../components/Button';
import { DiAndroid, DiApple, DiBugsense } from 'react-icons/di';

const ButtonPage = () => {
  const handleEvent = () => {
    console.log(
      'You can chnage this handle event to any events that you want to use'
    );
  };
  return (
    <div>
      <div>
        <Button
          secondary
          outline
          rounded
          className="mb-5"
          onClick={handleEvent}
        >
          <DiBugsense />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <DiApple />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <DiAndroid />
          See Deal!
        </Button>
      </div>
      <div>
        <Button success>Hide Ads!</Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
