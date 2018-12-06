const GitHub = require('github-api');
require('dotenv').config();

const gh = new GitHub({ token: process.env.GH_TOKEN});

async function getInfo(){
  try{
    console.log('start', GitHub)
    const ghUser =  gh.getUser();
    //const notifications = (await ghUser.listNotifications()).data;
    //const me = (await ghUser.getProfile()).data;
    //console.log('me', me, notifications.length);
    const ghRepo = gh.getRepo('node-vision', 'gh-api-test');
    const pm = await ghRepo.writeFile('master', '/content/content1.json', `{"some": ""key}`, 'commit msg 1', {});
  } catch (e){
    console.log(e)
  }
}

getInfo().then(()=> {
  console.log('finished')
});
