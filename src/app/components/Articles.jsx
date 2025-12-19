"use client";

import React, { useMemo, useState } from "react";

// Helper function to capitalize sentences properly
function capitalizeText(text) {
  if (!text) return "";
  
  // Split by sentences (period, exclamation, question mark)
  return text
    .split(/([.!?]+\s*)/)
    .map((sentence, i) => {
      const trimmed = sentence.trim();
      if (!trimmed) return sentence;
      
      // Capitalize first letter
      return trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase();
    })
    .join("");
}

// Helper to capitalize titles properly
function capitalizeTitle(text) {
  if (!text) return "";
  
  // Capitalize first letter of each word, but keep some words lowercase
  const smallWords = ['a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'if', 'in', 'of', 'on', 'or', 'the', 'to', 'with'];
  
  return text
    .split(' ')
    .map((word, index) => {
      const lower = word.toLowerCase();
      // Always capitalize first word, or if word is not in small words list
      if (index === 0 || !smallWords.includes(lower)) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      return lower;
    })
    .join(' ');
}

export default function Articles() {
  const articles = [
    {
      title: "How Does X (Twitter) Store Tweets for a User for Years and Still Be Able to Fetch Them Quickly?",
      number: "01",
      description: `I was recently scrolling on X, and I used the search function on a profile that had 100k+ tweets. In no time, it fetched all the tweets that contained that word.

It made me wonder how they store such massive amounts of user data for years and can still retrieve specific tweets so quickly. Then I went down a rabbit hole of research about databases, indexing, etc.

From what I have learnt, is that X stores data in a huge distributed database systems that is like a library of tweets. They do not keep all tweets in one place, because then it would be too difficult to pull data from millions of users from one DB.

Instead they use something called sharding. Sharding is a process like splitting data across multiple servers.

Sharding process: divide the tweets data into chunks mostly on user ID and the time.

For example users 0-1999 go to server A, 2000 - 3999 go to server B and so on.

So what is happening is, no single machine holds every tweet of one user. X have their own distributed DB called Manhattan.

Every tweet -> tweet ID, user ID, timestamp, content, metadata. This is how they store.

Now part 2, how do they fetch tweets quickly?

They use something called as indexing, indexing is a process where its like a link of the actual data, the real data is disguised in form of something shorter and easier to search.

So then I naturally had a doubt, every tweet as a whole is indexed, but how is it able to search a specific word in a tweet? Every word is indexed?

After some research, I learnt that they use something called inverted index. This basically means, every significant word is indexed.

So for example, instead of "page -> words in the page", its "word -> the pages containing the word".

So when you search for that word, it is easily able to pull all the tweets containing that word using the inverted index.

Services they use to achieve this are: Java, Scala, C++, search engine called Lucene, etc. etc. It's too deep! But so cool.`,
    },
    {
      title: "How Spotify Streams Our Favorite Music Instantly? With No Lag, No Buffer, Even When Millions of People Are Hitting Play at the Same Time?",
      number: "02",
      description: `A question that popped in my head while I was jamming to my favorite playlist on Spotify. How does Spotify stream music so quickly with no lag, no buffer, even when millions of people are hitting play at the same time + at the same time its not even saved on our device. How does it do that?

As usual, dug into my research just for curiosity and here is what I have learnt.

Spotify uses combination of multiple techniques such as content delivery networks called "CDN", caching and few streaming protocols.
So how CDN's in Spotify work are, when a song from an artist is uploaded to Spotify, its not just stored in one central main Spotify server. That would be too many requests to deliver from one source.

Instead, when a user clicks on the song, it fetches the song from the nearest CDN server, a big data center nearby that stores copies of popular songs aka caching the popular songs.
Servers to user is already fast even if it is across continents, so by bringing a copy of the song more closer to the user who requests the loading time makes it even faster.

Now part 2, how does it stream the song so that it plays instantly with no lag or buffer?
Spotify uses a streaming protocol called "HTTP Live Streaming" or HLS. What HLS does is, it breaks the song into smaller chunks of data, usually 2-10 seconds long (is what I have read not sure),
and these chunks are sent to the user one after another like, when the user is listening to first chunk, in the background, the second chunk is already downloaded and ready to play. So by the time the first chunk ends, the second chunk is ready to play and so on. This way it gives an illusion of continuous playback with no lag or buffer.

And to handle millions of people hitting play at the same time, it uses distributed servers, load balancing techniques, a P2P peer to peer caching.
This P2P concept is very fascinating, what it does is, when we stream a song, Spotify first checks if any nearby users (that are on the same network or a region) already have chunks downloaded of that song.
If yes, it can download the same chunks of song from them instead of always requesting from the servers. It might be a small thing when we look at it in a single user level.
But when we zoom out the picture and see millions of users doing this, it actually does save a lot of the pressure from a server.

However, Spotify has stopped or reduced the usage of P2P since they believe their CDN became fast enough to deliver content without any hiccups.`,
    },
    {
      title: "How Does Uber Match Riders to Drivers So Quickly?",
      number: "03",
      description: `While I was waiting for my Uber ride the other day at Bangalore, I wondered how does Uber match riders to drivers so quickly? Like within seconds of requesting a ride, it shows you the driver details and the estimated time of arrival. How does it do that?

I found that when a user requests a ride, the app instantly sends their location and trip details like the pickup and drop point to the Uber servers in a JSON format.
Uber app collects key info like user ID, current GPS coordinates (to keep pickup accurate), pickup, drop off location, ride type (UberX, Black etc. etc.), payment method, device info (for any security purposes).

The Uber backend servers receive this JSON and it validates the request (checks if the coordinates are real because we can't ask them to drop off at a sea), with the pickup locations
it looks up nearby drivers using in a circular map (will explain in another article).
The driver's of Uber, their devices also send JSONs to the server, such as driver ID, location, status available or doing a trip, time.

Then comes the matching logic. The request JSON and driver JSON are compared and it calculates the best ETA. It usually is drivers near 3-5km range of the pickup point.
It filters all drivers who are nearby the pickup point -> then who are available -> calculate estimated time of arrival -> prioritize the drivers who can reach the fastest.

Then Uber sends a ride offer as these are not force assigned, drivers have a choice to accept or reject. The driver sees the pickup, drop. Now the drivers can accept or reject. But Uber servers
keep sending the requests to multiple people until its accepted.

Then the driver who accepts it, their name, vehicle number, phone number, are picked from the driver and sent as JSON file to Uber servers, and that is again sent back to the user to show on their apps as to who is coming to pickup.

In short, there is a lot of API magic.`,
    },
    {
      title: "Why Do Delivery Apps Like Uber, Ola, Rapido, Swiggy, Zomato All Use Circular Map Searching?",
      number: "04",
      description: `All apps of these kind use circular map searching because its the most efficient way to find nearby drivers of any sort.
There a reason why its efficient, a circle as a shape has no corners, no edges, so there are no spaces wasted on a map while searching.
Its simpler to calculate using formulas like haversine distance, which finds the distance between 2 latitudes and longitudes points on earth.

A circle can cover a larger area than any other shape around a person (a point).
The system treats your current location as the center of the circle, nearby drivers are defined in a radius of 3-5kms, this naturally forms a circle which ensures
equal distance in all the directions. Try that with any other shape, it will not be equidistant.

Hence it is the most efficient and fair geometric shape for proximity, no one particular direction is favoured, and no nook and corner is wasted.

So the next time you see a circle animation in one of those apps while waiting for a driver to be assigned, its for a purpose and not aesthetic!`,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const formatParagraphs = (text) => {
    return text
      .split(/\n\s*\n/)
      .filter(p => p.trim())
      .map(p => capitalizeText(p.trim()));
  };

  const getPreview = (text, wordLimit = 25) => {
    const words = text.split(' ');
    return words.slice(0, wordLimit).join(' ') + (words.length > wordLimit ? '…' : '');
  };

  return (
    <section className="font-regular text-white [data-theme='light']:text-black space-y-8 transition-colors duration-300">
      <div className="space-y-8">
        {articles.map((article, index) => {
          const isOpen = openIndex === index;
          const paragraphs = formatParagraphs(article.description);
          const preview = getPreview(article.description);

          return (
            <article
              key={index}
              className="space-y-4 border-b border-white/10 [data-theme='light']:border-black/10 pb-6 last:border-0 last:pb-0 transition-colors duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[0.75rem] font-medium text-white/40 [data-theme='light']:text-black/40 tracking-wider">
                      {article.number}
                    </span>
                  </div>
                  <h3 className="text-[0.875rem] font-medium leading-[1.5] text-white [data-theme='light']:text-black transition-colors duration-300">
                    {article.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="text-[0.75rem] font-normal text-white/60 [data-theme='light']:text-black/60 underline underline-offset-4 hover:text-white [data-theme='light']:hover:text-black transition-colors duration-300 flex-shrink-0"
                  aria-expanded={isOpen}
                >
                  {isOpen ? "Hide" : "Read"}
                </button>
              </div>

              <div className="space-y-3">
                {!isOpen ? (
                  <p className="text-[0.875rem] font-normal leading-[1.6] text-white/80 [data-theme='light']:text-black/80 transition-colors duration-300">
                    {capitalizeText(preview)}
                  </p>
                ) : (
                  <div className="space-y-4">
                    {paragraphs.map((para, i) => (
                      <p
                        key={i}
                        className="text-[0.875rem] font-normal leading-[1.6] text-white/90 [data-theme='light']:text-black/90 transition-colors duration-300"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
