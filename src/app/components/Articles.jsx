"use client";

import React, { useMemo, useState } from "react";

export default function Articles() {
  const projects = [
    {
      title:
        "how does x (twitter) store tweets for a user for years and still be able to fetch them quickly?",
      tech: "#1",
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
    {
      title:
        "how spotify streams our fav music instantly? with no lag, no buffer, even when millions of people are hitting play at the same time?",
      tech: "#2",
      description: `
        a question that popped in my head while i was jamming to my fav playlist on spotify. how does spotify stream music so quickly with no lag, no buffer, even when millions of people are hitting play at the same time + at the
        same time its not even saved on our device. how does it do that?

        as usual, dug into my research just for curiosity and here is what i have learnt.

        spotify uses combination of multiple techniques such as content delivery networks called "cdn", caching and ffew streaming protocols.
        so how cdn's in spotify work are, when a song from an artist is uploaded to spotify, its not just stored in one central main spotify server. that would be too many requests to deliver from one source.
    
        instead, when an user clicks on the song, it fetches the song from the nearest cdn server, a big data center nearby that stores copies of popular songs aka caching the popular songs.
        servers to user is already fast even if it is across contients, so by bringing a copy of the song more closer to the user who requests the loading time makes it even faster.

        now part 2, how does it stream the song so that it plays instantly with no lag or buffer?
        spotify uses a streaming protocol called "http live streaming" or hls. what hls does is, it breaks the song into smaller chunks of data, usually 2-10 seconds long (is what i have read not sure),
        and these chunks are sent to the user one after another like, when the user is listening to first chunk, in the background, the second chunk is already downlaoded and ready to play. so by the time the first chunk ends, the second chunk is ready to play and so on. this way it gives an illusion of continuous playback with no lag or buffer.

        and to handle millions of people hitting play at the same time, it uses distributed servers, load balancing techniques, a p2p peer to peer caching.
        this p2p concept is very fascinating, what it does is, when we stream a song, spotify first checks if any nearby users (that are on the same network or a region) already have chunks downloaded of that song.
        if yes, it can download the same chunks of song from them insteead of always requesting from the servers. it might be a small thing when we look at it in a single user level.
        but when we zoom out the picture and see millions of users doing this, it actually does save a lot of the pressure from a server.

        however, spotify has stopped or reduced the usage of p2p since they believe their cdn became fast enough to deliver content without any hiccups
      `,
    },
    {
      title: "how does uber match riders to drivers so quickly?",
      tech: "#3",
      description: `
        while i was waiting for my uber ride the other day at bangalore, i wondered how does uber match riders to drivers so quickly? like within seconds of requesting a ride, it shows you the driver details and the estimated time of arrival. how does it do that?

        i found that when an user requests a ride, the app instantly sends their location and trip details like the pickup and drop point to the uber servers in a json format.
        uber app collects key info like user id, current gps co-ordinated (to keep pickup accurate), pickup, drop off location, ride type (uberx, black etc etc), payment method, devide info (for any security purposes).

        the uber backend servers recieve this json and it validates the request (checks if the co ordinates are real because we cant ask them to drop off at a sea), with the pickup locations
        it looks up nearby drivers using in a circular map (will explain in another article). 
        the driver's of uber, their devices also send jsons to the server, such as driver id, location, status available or doing a trip, time. 
        
        then comes the matching logic. the request json and driver json are compared and it calculates the best eta. it usually is drivers near 3-5km range of the pickup point.
        it filters all drivers who are nearby the pickup point -> then who are available -> calculate estimated time of arrival -> prioritize the drivers who can reach the fastest.

        then uber sends a ride offer as these are not force assigned, drivers have a choice to accept or reject. the driver sees the pikcup, drop. now the drivers can accept or reject. but uber servers
        keep sending the requests to multiple people until its accepted.

        then the driver who accepts it, their name, vehicle number, phone number, are picked from the driver and sent as json file to uber servers, and that is again sent back to the user to show on their apps as to who is coming to pickup.

        in short, there is a lot of api magic.
      `,
    },
    {
      title:
        "why do delivery apps like uber, ola, rapido, swiggy, zomato all use circular map searching?",
      tech: "#4",
      description: `
        all apps of these kind use circular map searching because its the most efficient way to find nearby drivers of any sort.
        there a reason why its efficient, a circle as a shape has no corners, no edges, so there are no spaces wasted on a map while searching.
        its simpler to calculate using formulas like haversine distance, which finds the distance between 2 latitudes and longitudes points on earth.

        a circle can cover a larger area than any other shape around a person (a point).
        the system treats your current location as the center of the circle, nearby drivers are defined in a radius of 3-5kms, this naturally forms a circle which ensures
        equal distance in all the directions. try that with any other shape, it will not be equidistant.

        hence it is the most efficient and fair geometric shape for proximity, no one particular direction is favoured, and no nook and corner is wasted.

        so the next time you see a circle animation in one of those apps while waiting for a driver to be assigned, its for a purpose and not aesthetic!
      `,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const formatter = useMemo(
    () => ({
      sentence: (text = "") => {
        const trimmed = text.trim();
        if (!trimmed) return "";
        return trimmed[0].toUpperCase() + trimmed.slice(1);
      },
      paragraph: (text = "") =>
        text
          .replace(/\s+/g, " ")
          .trim()
          .replace(/([.?!])\s+/g, "$1 ")
          .replace(/^\s*/, ""),
    }),
    []
  );

  return (
    <section className="font-regular text-white space-y-6 normal-case">
      <div className="space-y-6">
        {projects.map((project, index) => {
          const paragraphs = project.description
            .trim()
            .split(/\n\s*\n/)
            .map((p) => formatter.paragraph(p));

          const preview =
            formatter.paragraph(project.description)
              .split(" ")
              .slice(0, 30)
              .join(" ") + "…";

          const isOpen = openIndex === index;

          return (
            <article
              key={index}
              className="space-y-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs text-white/50 mb-2">{formatter.sentence(project.tech)}</p>
                  <h3 className="text-sm font-semibold leading-snug">
                    {formatter.sentence(project.title)}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="text-xs text-white/60 underline underline-offset-2 hover:text-white"
                  aria-expanded={isOpen}
                >
                  {isOpen ? "Hide" : "Read"}
                </button>
              </div>

              <div className="mt-3 text-white/80 leading-relaxed space-y-3 text-sm">
                {!isOpen ? (
                  <p>{formatter.sentence(preview)}</p>
                ) : (
                  paragraphs.map((para, i) => (
                    <p key={i}>{formatter.sentence(para)}</p>
                  ))
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
