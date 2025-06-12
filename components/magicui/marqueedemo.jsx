import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Kiran Kumar",
    username: "@Kiran Kumar",
    body: "You are getting innto the next level of projects. All the best. keep working hard",
    img: "https://media.licdn.com/dms/image/v2/C4D03AQHkDbwHMjzWyg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1655443866930?e=1755129600&v=beta&t=Idw7BQnSWJd-GYpNc9jAMemCecWtlXDZpLnhiAmD0aQ",
  },
  {
    name: "Anantha G ",
    username: "@Anantha G",
    body: "Your hard work and dedication are truly inspiring.",
    img: "https://media.licdn.com/dms/image/v2/D5603AQGpb-O5gDTlFg/profile-displayphoto-shrink_800_800/B56ZchyvMYHEAo-/0/1748618641548?e=1755129600&v=beta&t=AlNyoWMgM58AsshVd4UxCwp9M1M42nres1FGomxX9bs",
  },
  {
    name: "David Mahesh Yarlagadda",
    username: "@Daved Mahesh",
    body: "Bro your journey as a web developer is truly impressive! The dedication and consistency you show on GitHub are remarkable. Keep inspiring and building amazing projects bro",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Sowmya Boorle",
    username: "@Sowmya",
    body: "To achieve the success first you need to face failure. You faced it and geared up and became successful.",
    img: "https://media.licdn.com/dms/image/v2/D5603AQFuptfClryzVQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724996734110?e=1755129600&v=beta&t=7K7Pdj2-tn8qQ04TrnLyNW2p15iPvHYrA0hIcSiaxL8",
  },
  {
    name: "Dangeti (Vishwesh) Sai Gayatri Vishwesh",
    username: "@Dangeti Vishwesh",
    body: "Great innovation, Kedarinadh Sai",
    img: "https://media.licdn.com/dms/image/v2/D5635AQHp4NwuQN0hhQ/profile-framedphoto-shrink_800_800/B56ZcAdNPWG4Ag-/0/1748059346289?e=1749999600&v=beta&t=R2ZonkVTED0byUP1juakCWcO2k1kf17TuLtyma89Rtc",
  },
  {
    name: "Kiran Kumar",
    username: "@Kiran Kumar",
    body: "Good job Harsha. Great knowledge you have.",
    img: "https://media.licdn.com/dms/image/v2/C4D03AQHkDbwHMjzWyg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1655443866930?e=1755129600&v=beta&t=Idw7BQnSWJd-GYpNc9jAMemCecWtlXDZpLnhiAmD0aQ",
  },
  {
    name: "TECHNICAL HUB",
    username: "@TECHNICAL HUB",
    body: "Well implemented. Keep learning and consistent.",
    img: "https://media.licdn.com/dms/image/v2/C560BAQGyqM7v-FVvXw/company-logo_200_200/company-logo_200_200/0/1630656112129/technicalhub_logo?e=1755129600&v=beta&t=q4a3vmeG7oGotf4SZ6mGEz5QD7n1XhWJzyJYw2EcQe0",
  },
  {
    name: "Arif Abdul",
    username: "@Arif Abdul",
    body: "Impressive 🤝🤝 All the best for upcoming projects 💐💐",
    img: "https://media.licdn.com/dms/image/v2/D5603AQGuXmW8atsqEA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731726185793?e=1755129600&v=beta&t=GGP0gdj-i9visi9Wr6KmXfmA5HDwoXaVzxoT1xbpRas",
  },
  {
    name: "Supriya Raman",
    username: "@Supriya Raman",
    body: "You are a wonderful orgainzer Harsha, thanks much for all the efforts, I am grateful I was part of your event, loads of best wishes for your future",
    img: "https://media.licdn.com/dms/image/v2/D5603AQEw-P2Rwo-iuQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1713548376924?e=1755129600&v=beta&t=je4Qg7md-P9EogcdO1mvzeM8rz0i_2BbFZuu_0BVCvQ",
  },
  {
    name: "Geethika Yerramsetti",
    username: "@Geethika Yerramsetti",
    body: "It's Amazing 😍. Keep going Harsha. Congo for making the event grand success..",
    img: "https://media.licdn.com/dms/image/v2/D5603AQG0IASTEJ2cdw/profile-displayphoto-shrink_400_400/B56ZTzMSthHEAg-/0/1739246874725?e=1755129600&v=beta&t=7W-5K5xuILh_SoSQ2OEpLjx5zcFPewjeWGTSwzJbpX4",
  },
  {
    name: "Swapna Dande",
    username: "@Swapna Dande",
    body: "All the very best Kedarinadh Sai Harsha !! You are a great techie, and wonderful person at heart. Keep going on ⭐️",
    img: "https://media.licdn.com/dms/image/v2/D5603AQFlEZIUXE8UZw/profile-displayphoto-shrink_400_400/B56ZVbD8RuHQAg-/0/1740989516529?e=1755129600&v=beta&t=nZQdhphX6zsyUw8e6-HSFv1h6VQu63Uk-DCDZ5DSa-g",
  },
  {
    name: "Asmita Gorti",
    username: "@Asmita Gorti",
    body: "Your tips, especially about hackathons, were so helpful and inspiring. Thank you!",
    img: "https://media.licdn.com/dms/image/v2/D5603AQFaCB8Swk5WfQ/profile-displayphoto-shrink_400_400/B56ZOmTZasGoAg-/0/1733661923435?e=1755129600&v=beta&t=6N-q9fVAl9S500c3nvl-hnF4zCgOl0YAF0TFpKPUfx8",
  },
  {
    name: "Harshendra Subba Reddy Nallamilli",
    username: "@Harshendra Nallamilli",
    body: "I know you'll do awesome. Hoping that the session was useful to many learning aspirants! Keep on doing what you're doing thammudu. Can't wait to see you grow!!",
    img: "https://media.licdn.com/dms/image/v2/D5603AQEsAEJQFpHAbg/profile-displayphoto-shrink_400_400/B56ZXmLkQDHoAg-/0/1743323547403?e=1755129600&v=beta&t=WMzj3esXPinE5VCjMmYbCMzPYoGZD2gq5fxQHkwBNsQ",
  },
  {
    name: "Kiran Kumar",
    username: "@Kiran Kumar",
    body: "Trust me, I have told many a time. You are truly working on various technologies and now coding too. Great job man",
    img: "https://media.licdn.com/dms/image/v2/C4D03AQHkDbwHMjzWyg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1655443866930?e=1755129600&v=beta&t=Idw7BQnSWJd-GYpNc9jAMemCecWtlXDZpLnhiAmD0aQ",
  },
  {
    name: "Ashok Maranala",
    username: "@Ashok Maranala",
    body: "Impressive work on the Vikram AI Assistant project! 🎉 Your dedication and creativity are truly inspiring. It's exciting to see how you've applied your skills to build such a valuable tool.🌟👏 G Kedarinadh Sai Harsha",
    img: "https://media.licdn.com/dms/image/v2/C4D03AQHwHSLDFll8bA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1654753548373?e=1755129600&v=beta&t=4lPcz0abKQVYttkou8P9EyMhcQ_ZyZeURwGzUYED7yc",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        " bg-white hover:bg-gray-200"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
    </div>
  );
}
