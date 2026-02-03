"use client";

import React, { useState } from "react";

export default function Articles() {
  const articles = [
    {
      number: "01",
      title: "How Does X Store Tweets and Fetch Them Quickly?",
      preview: "Exploring distributed databases, sharding, and inverted indexes that power Twitter's search.",
      content: `I was scrolling on X and used the search function on a profile with 100k+ tweets. It fetched all matching tweets instantly.

X stores data in distributed database systems-not one central DB. They use sharding, splitting data across multiple servers by user ID and time. Users 0-1999 go to server A, 2000-3999 to server B, and so on.

X built their own distributed DB called Manhattan. Every tweet stores: tweet ID, user ID, timestamp, content, and metadata.

For fast retrieval, they use indexing. But how do they search specific words? Through inverted indexes-instead of "page → words," it's "word → pages containing the word."

When you search, it pulls all tweets containing that word using the inverted index. They use Java, Scala, C++, and Lucene search engine to achieve this.`,
    },
    {
      number: "02",
      title: "How Does Spotify Stream Music Instantly?",
      preview: "CDNs, HTTP Live Streaming, and why your music never buffers.",
      content: `Spotify uses CDNs (Content Delivery Networks), caching, and streaming protocols.

When a song is uploaded, it's not stored in one central server. When you play a song, it fetches from the nearest CDN server-a data center nearby that caches popular songs.

For instant playback, Spotify uses HTTP Live Streaming (HLS). It breaks songs into 2-10 second chunks. While you listen to chunk one, chunk two downloads in the background. Seamless.

To handle millions of simultaneous plays, they use distributed servers, load balancing, and P2P caching (though they've reduced P2P since their CDN became fast enough).`,
    },
    {
      number: "03",
      title: "How Does Uber Match Riders to Drivers?",
      preview: "JSON payloads, circular map searching, and real-time matching logic.",
      content: `When you request a ride, the app sends your location and trip details to Uber servers as JSON: user ID, GPS coordinates, pickup/drop locations, ride type, payment method.

The backend validates the request, checks if coordinates are real (you can't drop off in the sea), and looks up nearby drivers using circular map searching.

Drivers send JSONs too: driver ID, location, availability status, time. The matching logic compares these, calculates ETA for drivers within 3-5km, filters by availability, and prioritizes fastest arrival.

Uber sends ride offers-drivers can accept or reject. Once accepted, driver details are sent back to your app. A lot of API magic.`,
    },
    {
      number: "04",
      title: "Why Do Delivery Apps Use Circular Map Searching?",
      preview: "The geometry behind Uber, Swiggy, and Zomato's driver matching.",
      content: `A circle has no corners or edges-no wasted space when searching a map. It's simpler to calculate using haversine distance between latitude/longitude points.

Your location becomes the center. Nearby drivers are defined within a 3-5km radius, forming a circle that ensures equal distance in all directions. No other shape is equidistant.

It's the most efficient and fair geometric shape for proximity. No direction is favored, no corner is wasted.

Next time you see that circle animation while waiting for a driver, it's functional-not just aesthetic.`,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-6">
      {articles.map((article, idx) => {
        const isOpen = openIndex === idx;
        
        return (
          <div key={idx} className="group">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <span className="text-xs text-black/30 font-medium">
                  {article.number}
                </span>
                <h3 className="mt-1 text-[0.9375rem] font-medium text-black leading-snug">
                  {article.title}
                </h3>
              </div>
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="text-xs text-black/40 hover:text-black transition-colors flex-shrink-0 mt-4"
              >
                {isOpen ? "Close" : "Read"}
              </button>
            </div>
            
            {!isOpen ? (
              <p className="mt-1.5 text-[0.875rem] leading-relaxed text-black/50">
                {article.preview}
              </p>
            ) : (
              <div className="mt-3 space-y-3">
                {article.content.split('\n\n').map((para, i) => (
                  <p key={i} className="text-[0.875rem] leading-[1.7] text-black/60">
                    {para}
                  </p>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
