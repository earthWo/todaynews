
let stream =weex.requireModule('stream');

export function get(url,callback){
    stream.fetch({
        method:'GET',
        type:'json',
        url:url
    },callback)
}



export function getHomeUrl(category){

   return 'http://is.snssdk.com/api/news/feed/v51/?category='+category;

}