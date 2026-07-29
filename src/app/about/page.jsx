import AboutHero from "@/Components/About/AboutHero";
import GallerySection from "@/Components/About/GallerySection";
import MissionVisionValues from "@/Components/About/MissionVisionValues";
import OfficeLocation from "@/Components/About/OfficeLocation";

const ContactPage = () => {
  return (
    <div>
      <AboutHero></AboutHero>

      <MissionVisionValues></MissionVisionValues>

      <GallerySection></GallerySection>

      <OfficeLocation></OfficeLocation>
    </div>
  );
};

export default ContactPage;
