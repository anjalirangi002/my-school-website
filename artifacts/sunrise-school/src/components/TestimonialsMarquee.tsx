import { Star, Quote } from "lucide-react";

export type Testimonial = {
  name: string;
  relation: string;
  quote: string;
  initials: string;
};

const REVIEWS: Testimonial[] = [
  {
    name: "Sunita Devi",
    relation: "Mother of Class 8 student",
    quote:
      "The teachers at Sunrise are incredibly supportive. My child's confidence has grown immensely, and the discipline they instil is exactly what we wanted.",
    initials: "SD",
  },
  {
    name: "Ramesh Kumar",
    relation: "Father of Class 12 student",
    quote:
      "I am deeply impressed by the 100% board results. The school's focus on academics, coupled with safe transport facilities, gives us complete peace of mind.",
    initials: "RK",
  },
  {
    name: "Anita Sharma",
    relation: "Mother of Class 5 student",
    quote:
      "The smart classrooms and engaging activities keep my child excited about going to school every day. It truly feels like a second home.",
    initials: "AS",
  },
  {
    name: "Vikram Singh",
    relation: "Father of Class 10 student",
    quote:
      "Sunrise focuses equally on studies, sports, and values. My son has become more disciplined and responsible after joining this school.",
    initials: "VS",
  },
  {
    name: "Pooja Rani",
    relation: "Mother of Class 3 student",
    quote:
      "The faculty here treats every child with care and patience. The morning assemblies and cultural events have boosted my daughter's confidence on stage.",
    initials: "PR",
  },
  {
    name: "Naresh Kumar",
    relation: "Father of Class 7 student",
    quote:
      "Safe school transport, clean campus and qualified teachers — Sunrise truly delivers on every promise. We are proud parents of a Sunrise student.",
    initials: "NK",
  },
  {
    name: "Kavita Yadav",
    relation: "Mother of Class 11 student",
    quote:
      "The science labs and library facilities are excellent. Teachers personally guide students for board exams and competitive entrances.",
    initials: "KY",
  },
  {
    name: "Suresh Goyal",
    relation: "Father of Class 9 student",
    quote:
      "Affordable fees, premium quality education and strong CBSE values. There is no better choice for our region than Sunrise School.",
    initials: "SG",
  },
  {
    name: "Manju Devi",
    relation: "Mother of Class 6 student",
    quote:
      "I appreciate how teachers regularly update us about our child's progress. The school feels like a true partner in our parenting journey.",
    initials: "MD",
  },
  {
    name: "Rajeev Verma",
    relation: "Father of Class 12 student (Alumni Parent)",
    quote:
      "Both my children studied here. Today my elder one is in a top engineering college — credit goes to the strong academic foundation built at Sunrise.",
    initials: "RV",
  },
];

function ReviewCard({ review }: { review: Testimonial }) {
  return (
    <article
      className="bg-white p-7 rounded-2xl border border-border shadow-sm flex flex-col gap-5 w-[320px] md:w-[380px] shrink-0 mx-3 hover-lift"
      aria-label={`Review by ${review.name}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>
        <Quote className="w-7 h-7 text-primary/15" />
      </div>
      <blockquote className="flex-1 text-muted-foreground leading-relaxed text-[15px] italic">
        “{review.quote}”
      </blockquote>
      <div className="flex items-center gap-3 pt-4 border-t border-border/60">
        <div className="w-11 h-11 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-sm">
          {review.initials}
        </div>
        <div>
          <h4 className="font-bold text-foreground text-sm">{review.name}</h4>
          <p className="text-xs text-muted-foreground">{review.relation}</p>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialsMarquee() {
  // Duplicate the list once so the marquee loops seamlessly (-50% translate).
  const loop = [...REVIEWS, ...REVIEWS];

  return (
    <div
      className="relative overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0, #000 6%, #000 94%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0, #000 6%, #000 94%, transparent 100%)",
      }}
    >
      <div className="marquee-track flex w-max py-6">
        {loop.map((review, idx) => (
          <ReviewCard key={`${review.initials}-${idx}`} review={review} />
        ))}
      </div>
    </div>
  );
}
