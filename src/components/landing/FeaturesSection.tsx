import type { Feature } from "@/types/index";
import FeatureBox from "@/components/landing/FeatureBox";

const FeaturesSection = () => {
  const features: Feature[] = [
    {
      icon: "🔐",
      title: "End-to-End Privacy",
      content:
        "Your messages are encrypted in your browser using a password only you know. No one—not even SafeWords—can read them."
    },
    {
      icon: "📦",
      title: "Friendly Output Format",
      content:
        "Encrypted output is compact, portable, and safe to paste into emails, chats, or even social bios."
    },
    {
      icon: "✉️",
      title: "Secure Note Sharing",
      content:
        "Use it to send secrets, API keys, login details, love letters, or journal entries. All password-protected and tamper-proof."
    },
    {
      icon: "🌍",
      title: "Works Anywhere",
      content:
        "Send encrypted messages over WhatsApp, Twitter DMs, or even post them publicly. Only those with the password can unlock them."
    },
    {
      icon: "👨‍💻",
      title: "Developer-Ready",
      content:
        "Ideal for securely sharing config values, debugging tokens, or environment variables during development without using tools like GPG."
    },
    {
      icon: "⚡",
      title: "Minimal & Instant",
      content:
        "No signup, no friction. Just paste, protect, and go. Encryption shouldn’t feel technical—it should feel effortless."
    }
  ];

  return (
    <div className='w-full flex flex-col gap-3'>
      <h2 className='font-extrabold text-2xl mb-4'>
        Why SafeWords Stands Out?
      </h2>

      <div className='w-full flex flex-col items-center gap-2 md:flex-row md:flex-wrap'>
        {features.map((feature, i) => (
          <FeatureBox key={i} featureDetails={feature} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
