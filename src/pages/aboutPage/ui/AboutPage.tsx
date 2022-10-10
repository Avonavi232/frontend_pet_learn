/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { FC, useState } from 'react';
import { Button } from 'shared/ui/Button';
import { ModalWindow } from 'shared/ui/ModalWindow';

const AboutPage: FC = () => {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <h2>{t('О сайте')}</h2>
      <Button onClick={() => setOpen(true)}>Открыть модалку</Button>
      <ModalWindow open={isOpen} onClose={() => setOpen(false)}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquid aspernatur
        blanditiis
        consequuntur corporis cum deleniti dolorum et excepturi expedita, harum illo illum inventore
        iste labore
        molestias natus nihil officia omnis porro possimus quaerat quibusdam quidem repellendus
        repudiandae sequi
        suscipit ullam ut vel. Aut eum in laudantium modi sit?
      </ModalWindow>
    </div>
  );
};

export default AboutPage;
