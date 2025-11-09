"use client";

import React, { useState } from "react";

export default function Unfinished() {
  const projects = [
    {
      title:
        "how does x (twitter) store tweets for a user for years and still be able to fetch them quickly?",
      tech: "tech thoughts 1",
      description: `
        I was recently scrolling on X, and I used the search function on a profile that had 100k+ tweets. In no time, it fetched all the tweets that contained that word.

        It made me wonder how they store such massive amounts of user data for years and can still retrieve specific tweets so quickly. then i went down a rabbit hole of research about databases, indexing etc. 

        from what i have learnt, is that x stores data in a huge distributed database systems that is like a library of tweets. they do not keep all tweets in one place, because then it would be too difficult to pull data from millions of users from one db.

        instead they use something called sharding. sharding is a process like splitting data accross multiple servers.

        sharding process: divide the tweets data into chunks mostly on user id and the time

        for example users 0-1999 go to server a, 2000 - 3999 go to server b and so on.

        so what is happening is, no single machine holds every tweet of one user. x have their own distributed db called manhattan.

        every tweet -> tweet id, user id, timestamp, content, metadata. this is how they store.

        now part 2, how do they fetch tweets quickly?

        they use something called as indexing, indexing is a process where its like a link of the actual data, the real data is disguised inform of something shorter and easier to search.

        so then i naturally had a doubt, every tweet as a whole is indexed, but how is it able to search a specific word in a tweet? every words is indexed?

        after some research, i learnt that they use something called inverted index. this basically means, every significant words is indexed.

        so for example, instead of "page -> words in the page", its "word -> the pages containing the word".
        
        so when you search for that word, it is easily able to pull all the tweets containing that word using the inverted index.

        services they use to achieve this are: java, scala, c++, search engine called lucene, etc etc. its too deep! but so cool.
      `,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="font-regular text-black">
      <p className="mb-12">
        these are the tech thought pieces i write out of curiosity when i get random doubts and try to learn about them.
      </p>

      <div className="space-y-12">
        {projects.map((project, index) => {
          const paragraphs = project.description
            .trim()
            .split(/\n\s*\n/)
            .map((p) => p.trim());

          // preview - first 40 words
          const preview =
            project.description
              .replace(/\s+/g, " ")
              .trim()
              .split(" ")
              .slice(0, 40)
              .join(" ") + "...";

          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border-b border-neutral-200 pb-6"
            >
              <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                {project.title}
              </h3>

              <p className="text-sm text-neutral-600 mb-3">{project.tech}</p>

              {!isOpen ? (
                <p className="text-neutral-800 leading-relaxed mb-4">
                  {preview}
                </p>
              ) : (
                <div className="text-neutral-800 leading-relaxed space-y-4 mb-4">
                  {paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              )}

              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="text-neutral-900 hover:underline text-sm font-medium"
              >
                {isOpen ? "show less ↑" : "read more ↓"}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
