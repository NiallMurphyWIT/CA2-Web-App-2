import postModel from './api/posts/postsModel';

const posts = [
    {  id: 1 ,
        title : 'Rise of the Elements goes Live',
        link : 'https://twitter.com/TFT/status/1191807122847281155',
        author : 'Harry Dunne',
        comments : [],
        upvotes : 55
    },
    { 
        id: 2,
        title : "Patch 9.22 notes",
        link : 'https://na.leagueoflegends.com/en/news/game-updates/patch/teamfight-tactics-patch-922-notes',
        author : 'Dave Lee',
        comments : [],
        upvotes : 34
    },
    { 
        id: 3,
        title : '@ly_keane wins the Rise of the Elements Invitational',
        link : 'https://twitter.com/TFT/status/1190024691936874496',
        author : 'Joey Walsh',
        comments : [],
        upvotes : 78
    },
    { 
        id: 4,
        title : 'TFT ranked rewards announced',
        link : 'https://na.leagueoflegends.com/en/news/community/promotion/be-victorious-2019-ranked-rewards',
        author : 'unknown',  
        comments : [],
        upvotes : 8
    },
    {  id: 5 ,
        title : 'New Set Rise of the Elements Announced',
        link : 'https://nexus.leagueoflegends.com/en-us/2019/10/teamfight-tactics-rise-of-the-elements/',
        author : 'Dave Murphy',
        comments : [],
        upvotes : 65
    },           
    {  id: 6 ,
        title : "Cheat Sheet for new set'",
        link : 'https://twitter.com/Mortdog/status/1186719240692224000',
        author : 'Mortdog',
        comments : [],
        upvotes : 10
    },           
    {  id: 7 ,
        title : 'Larger board size confirmed',
        link : 'https://twitter.com/Mortdog/status/1184882384744800256',
        author : 'Mortdog',
        comments : [],
        upvotes : 23
    },
      ];
      export default async function loadPosts() {
    try {
        await postModel.deleteMany();
        await postModel.collection.insertMany(posts);
        console.info(`${posts.length} posts were successfully stored.`);
      } catch (err) {
        console.error(`failed to Load posts: ${err}`);
      }
};