import _ from "lodash";

class StubAPI {
    constructor() {
        this.posts = [
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
            }
        ];
    }

    getAll() {
        return this.posts;
    }

    add(title, author, link) {
        let id = 1;
        let last = _.last(this.posts);
        if (last) {
        id = last.id + 1;
        }
        let len = this.posts.length;
        let newLen = this.posts.push({
        id,
        title,
        author,
        link,
        comments: [],
        upvotes: 0
        });
        return newLen > len;
    }

    delete(id) {
        let elements = _.remove(this.posts, post => post.id === id);
        return elements;
    }

    upvote(id) {
        let index = _.findIndex(this.posts, post => post.id === id);
        if (index !== -1) {
        this.posts[index].upvotes += 1;
        return true;
        }
        return false;
    }

    downvote(id) {
        let index = _.findIndex(this.posts, post => post.id === id);
        if (index !== -1) {
            if (this.posts[index].upvotes === 0){
                let elements = _.remove(this.posts, post => post.id === id);
                return elements;
            }
            else{
                this.posts[index].upvotes -= 1;
                return true;
            }
        }
        return false;
    }

    getPost(id) {
        let index = _.findIndex(this.posts, post => post.id === id);
        let result = index !== -1 ? this.posts[index] : null;
        return result;
    }

    addComment(postId, c, n) {
        let post = this.getPost(postId);
        let id = 1;
        let last = _.last(post.comments);
        if (last) {
        id = last.id + 1;
        }
        post.comments.push({ id: id, comment: c, author: n, upvotes: 0 });
    }

    upvoteComment(postId, commentId) {
        let post = this.getPost(postId);
        let index = _.findIndex(post.comments, c => c.id === commentId);
        if (index !== -1) {
        post.comments[index].upvotes += 1;
        }
    }

    downvoteComment(postId, commentId) {
        let post = this.getPost(postId);
        let index = _.findIndex(post.comments, c => c.id === commentId);
        if (index !== -1) {
            if(post.comments[index].upvotes === 0){
                let commentElements = _.remove(post.comments, c => c.id === commentId);
                return commentElements;
            }
            else{
                post.comments[index].upvotes -= 1;
                return true;
            }
        }
        return false;
    }

    deleteComment(postId, commentId){
        let post = this.getPost(postId);
        let elements = _.remove(post.comments, c => c.id === commentId);
        return elements;
    }
}

export default new StubAPI();