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
