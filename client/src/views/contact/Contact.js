import { useEffect } from 'react';

import useTopLoader from '../../hooks/useTopLoader';

const Contact = () => {
  const [loading,onToggleTopLoader] = useTopLoader();

  useEffect(() => {
    onToggleTopLoader(false);
  }, []);

  return (
    <div>
      <p>
      தொடர்புக்கு :
வணக்கம் ! இன்பத் தமிழ் நம் உயிருக்கு நேர் !

இராவணன் அங்காடியைத் தொடர்பு கொள்ள கீழ்காணும் இணைப்புகளைப் பயன்படுத்தவும்.

வாடிக்கையாளர் பிரிவு தொடர்புக்கு :

தொலைபேசி/பகிரி : 7871003935
மின்னஞ்சல் : raavananstore@gmail.com

மற்றபடி எந்த ஒரு சமூக வலைத்தலங்களிலும் இராவணன் அங்காடியின் பக்கங்களில் குறுஞ்செய்தி அனுப்பியும் தொடர்பு கொள்ளலாம். 

      </p>
    </div>
  );
};

export default Contact;
