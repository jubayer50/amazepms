import AuditsSection from "@/Components/RecruitmentsPage/AuditsSection";
import RecruitmentHero from "@/Components/RecruitmentsPage/RecruitmentHero";
import RecruitmentStrategy from "@/Components/RecruitmentsPage/RecruitmentStrategy";
import SkillDevelopment from "@/Components/RecruitmentsPage/SkillDevelopment";

const RecruitmentPage = () => {
  return (
    <div>
      <RecruitmentHero></RecruitmentHero>

      <RecruitmentStrategy></RecruitmentStrategy>

      <SkillDevelopment></SkillDevelopment>

      <AuditsSection></AuditsSection>
    </div>
  );
};

export default RecruitmentPage;
