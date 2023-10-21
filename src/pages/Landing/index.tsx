import {
  ClientsCarousal,
  RightImagedHero,
  LeftImagedHero,
  FinalHero,
  QualityHero,
  QuiltedImagesHero,
  StatsHero,
  TestimonialsHero,
} from '../../components/Heros';
import AppLayout from '../../wrappers/Layout';

export default function Landing() {
  return (
    <AppLayout>
      <RightImagedHero />
      <ClientsCarousal />
      <LeftImagedHero />
      <QualityHero />
      <StatsHero />
      <QuiltedImagesHero />
      <TestimonialsHero />
      <FinalHero />
    </AppLayout>
  );
}
