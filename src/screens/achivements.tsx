import c1 from "../assets/achievements/LUD.jpeg";
import c2 from "../assets/achievements/cfc.jpeg";
import c4 from "../assets/achievements/hoc.jpg";
import ideathon from "../assets/achievements/ideathon.jpg";
import mentor from "../assets/achievements/mentor.png";
import sisu from "../assets/achievements/sisu.jpeg";
import { CircularTestimonials } from "../components/Certificates";
import PageTitle from "../components/PageTitle";

export const achievements = [
  {
    quote: "Hour of Code",
    name: "Code.org",
    designation: "Jan 2025",
    src: c4,
    description:
      "Completed the Hour of Code initiative, demonstrating commitment to computer science education and coding literacy. Taught the basics of programming and Internet Safety to the students. This certificate recognizes participation in the global movement to introduce students to programming fundamentals.",
  },
  {
    quote: "Codefest- HACKATHON 2024",
    name: "Code For Change",
    designation: "Dec 2024",
    src: c2,
    description:
      "Participated in Codefest Hackathon 2024, showcasing problem-solving skills and collaborative development. Worked on innovative solutions addressing real-world challenges through technology and creative coding.",
  },
  {
    quote: "Git & Github Mentor",
    name: "Gces Girls Tech",
    designation: "Dec 2024",
    src: mentor,
    description:
      "Served as a Git & GitHub mentor for GCES Girls Tech, empowering fellow students with version control expertise. Led the participants through collaborative workflows, branching strategies, and open-source contribution practices.",
  },
  {
    quote: "Provincial Ideathon",
    name: "Code For Change",
    designation: "Nov 2024",
    src: ideathon,
    description:
      "Competed in the Provincial Ideathon and won the first prize, presenting innovative tech solutions at a regional level. Developed creative concepts and prototypes that detected the disease from the image on plants, demonstrating technical innovation.",
  },
  {
    quote: "30 Days Learning Challange",
    name: "Kathmandu Engineering College",
    designation: "Sep-Oct 2024",
    src: c1,
    description:
      "Successfully completed a 30-day intensive learning challenge, maintaining consistent daily progress in Artificial Intelligence. This achievement reflects dedication to continuous learning and self-improvement in technology.",
  },
  {
    quote: "Project Exhibition",
    name: "10th GCES IT Expo",
    designation: "June 2023",
    src: sisu,
    description:
      "Exhibited a project at the 10th GCES IT Expo, showcasing technical skills and innovation to the academic community. Presented a working solution that demonstrated practical application of programming knowledge and problem-solving abilities.",
  },
];

export const Achievements = () => (
  <section>
    <PageTitle
      title="Achievements"
      description="Certificates I have achieved"
    />
    <div className="w-full max-w-5xl mx-auto px-4">
      <CircularTestimonials
        testimonials={achievements}
        colors={{
          name: "#f7f7ff",
          designation: "#e1e1e1",
          testimony: "#f1f1f7",
          arrowBackground: "#0582CA",
          arrowForeground: "#141414",
          arrowHoverBackground: "#f7f7ff",
        }}
        fontSizes={{
          name: "28px",
          designation: "20px",
          quote: "20px",
        }}
      />
    </div>
  </section>
);
