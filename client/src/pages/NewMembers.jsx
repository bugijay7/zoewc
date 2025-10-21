import React from "react";

export default function NewMembers() {
  return (
    <div className="pt-30 max-w-[1400px] mx-auto bg-base-100 text-base-content px-6 md:px-20 py-16 leading-relaxed font-serif">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-medium uppercase tracking-wide text-primary">
          Zoe Visitors and Discipleship Manual
        </h1>
        <p className="text-lg italic text-secondary mt-2">
          A Christ-Centered Life — A Four Step Journey to Life Impact
        </p>
      </div>

      {/* Step 1 */}
      <section className="mb-12">
        <h2 className="text-2xl font-medium text-primary mb-4">
          Step 1: Know Our Guest
        </h2>
        <h3 className="text-lg font-medium mb-2">Welcoming Statement</h3>
        <p className="mb-4">
          Minister's brief introduction and connection with new visitors.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-secondary">
          <li>Which is your previous church?</li>
          <li>Do you have any introduction letter from your church?</li>
          <li>When and where were you born again?</li>
          <li>Would you remember the person who led you to salvation?</li>
          <li>Would you share your salvation experience?</li>
          <li>Would you tell your status? (single or married)</li>
          <li>How did you join Zoe?</li>
          <li>Have you attended any discipleship class before?</li>
          <li>What leadership position or ministry have you held before?</li>
        </ul>
      </section>

      {/* God Knows You */}
      <section className="mb-12 bg-base-200 shadow-md rounded-2xl p-6 md:p-10">
        <h2 className="text-2xl font-medium text-primary mb-4">
          God Knows You
        </h2>
        <p className="mb-4">
          God’s knowledge of you is complete and intimate. He knew you before
          you were formed and still knows your every thought and step.
        </p>
        <blockquote className="border-l-4 border-primary pl-4 italic text-secondary">
          “Before I formed you in the womb I knew you, before you were born, I
          set you apart.” — Jeremiah 1:5
        </blockquote>
        <blockquote className="border-l-4 border-primary pl-4 italic text-secondary mt-2">
          “You have searched me, Lord, and you know me.” — Psalm 139:1
        </blockquote>
      </section>

      {/* God Loves You */}
      <section className="mb-12">
        <h2 className="text-2xl font-medium text-primary mb-4">
          God Loves You
        </h2>
        <p className="mb-4">
          The love of God is the foundation of our Christian walk. His love is
          not earned but freely given — pure, holy, and infinite.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-secondary">
          <li>Why does God love you?</li>
          <li>How does God love us?</li>
          <li>
            “For God is love.” — 1 John 4:8. His very nature is love, not
            obligation.
          </li>
        </ul>
        <div className="mt-4 bg-base-200 border-l-4 border-primary p-4 rounded">
          <p className="italic">
            “For we are God's masterpiece. He has created us anew in Christ
            Jesus, so we can do the good things He planned for us long ago.”
            <br />— Ephesians 2:10
          </p>
        </div>
      </section>

      {/* Know God */}
      <section className="mb-12 bg-base-200 shadow-md rounded-2xl p-6 md:p-10">
        <h2 className="text-2xl font-medium text-primary mb-4">Know God</h2>
        <p className="mb-4">
          Knowing God is not an event but a journey of revelation, intimacy, and
          faith. He reveals Himself through creation, His Word, and His Son
          Jesus Christ.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-secondary">
          <li>Through Creation</li>
          <li>Through the Special Revelation</li>
          <li>Through Jesus, His Word (The Bible)</li>
        </ul>
      </section>

      {/* Love God */}
      <section className="mb-12">
        <h2 className="text-2xl font-medium text-primary mb-4">Love God</h2>
        <p className="mb-4">
          To love God is to live in obedience to His will and to extend His love
          to others.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-secondary">
          <li>Love Others</li>
          <li>Walk in all His ways</li>
          <li>Honor your parents — both physical and spiritual</li>
        </ul>
      </section>

      {/* Serve God */}
      <section className="mb-12 bg-base-200 shadow-md rounded-2xl p-6 md:p-10">
        <h2 className="text-2xl font-medium text-primary mb-4">
          Serve God and Enjoy Kingdom Benefits
        </h2>
        <p className="mb-4">
          Ministry is serving God through people. Service is the fruit of love,
          and those who serve diligently will not go unrewarded.
        </p>
        <blockquote className="border-l-4 border-primary pl-4 italic text-secondary">
          “If anyone serves Me, him will My Father honor.” — John 12:26
        </blockquote>
      </section>
    </div>
  );
}
