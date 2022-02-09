const linkSocialMedia = {
  github: 'kassiokennedy',
  youtube: 'UCavEwESz3925fFil-kZU_1Q',
  facebook: 'facebook',
  instagram: 'kassioksvieira',
  twitter: 'twitter'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linkSocialMedia[social]}`
    //alert(li.children[0].href)
  }
}
changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linkSocialMedia.github}`
  //trecho abaixo capta o dado do link e substitui na pagina html
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      
    })
}
getGithubProfileInfos()
