function createYouTubePlayer(videoId, targetId) {
    var targetElement = document.getElementById(targetId);
    var image = targetElement.querySelector('img');
    var width = getComputedStyle(image).getPropertyValue('width');
    var height = getComputedStyle(image).getPropertyValue('height');
    
    targetElement.innerHTML =
      '<iframe width="' + width + '" height="' + height + '" src="https://www.youtube.com/embed/' +
      videoId +
      '?autoplay=1&rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
  }
  
  function onYouTubeIframeAPIReady() {
    player = new YT.Player(container, {
      height: '100%',
      width: '100%',
      videoId: videoId,
      playerVars: {
        autoplay: 1,
        controls: 1,
        rel: 0
      },
      events: {
        onReady: onPlayerReady
      }
    });
  }
  
  function onPlayerReady(event) {
    event.target.playVideo();
    // Make sure to define the 'image' variable or remove this line if not needed
    // image.style.display = 'none';
  }
  
  if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
  } else {
    onYouTubeIframeAPIReady();
  }
  