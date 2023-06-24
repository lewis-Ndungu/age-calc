new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Favourite Song",
          artist: "Toosii",
          cover: "Resources/Music-cover/1.jpg",
          source: "Resources/Music-player/Favourite Song.mp3",
          url: "https://www.youtube.com/watch?v=R3a8k4TfVOI",
          favorited: false
        },
        {
          name: "Alejandro",
          artist: "Lady Gaga",
          cover: "Resources/Music-cover/2.jpg",
          source: "Resources/Music-player/Alejandro.mp3",
          url: "https://www.youtube.com/watch?v=ucniWROEZC4",
          favorited: true
        },
        {
          name: "One woman army",
          artist: "Porcelain Black",
          cover: "Resources/Music-cover/3.jpg",
          source: "Resources/Music-player/One Woman Army.mp3",
          url: "https://www.youtube.com/watch?v=3voeDhD8rfc",
          favorited: true
        },
        {
          name: "Ocean Eyes",
          artist: "Billie Eilish",
          cover: "Resources/Music-cover/4.jpg",
          source: "Resources/Music-player/Ocean Eyes.mp3",
          url: "https://www.youtube.com/watch?v=viimfQi_pUw",
          favorited: false
        },
        {
          name: "Blue Bird",
          artist: "Ikimono-gakari",
          cover: "Resources/Music-cover/5.jpg",
          source: "Resources/Music-player/Blue Bird.mp3",
          url: "https://www.youtube.com/watch?v=0qP9jkdRsYU",
          favorited: true
        },
        {
          name: "Original Series Opening 4: Go!!!",
          artist: "FLOW",
          cover: "Resources/Music-cover/6.jpg",
          source: "Resources/Music-player/GO!!!.mp3",
          url: "https://www.youtube.com/watch?v=GBE1VkrL8b0",
          favorited: true
        },
        {
          name: "Boruto Opening 5: Golden Time",
          artist: "Fujifabricis",
          cover: "Resources/Music-cover/7.jpg",
          source: "Resources/Music-player/Golden Time.mp3",
          url: "https://www.youtube.com/watch?v=zxLtVpAAm4w",
          favorited: true
        },
        {
          name: "Like My Father",
          artist: "Jax",
          cover: "Resources/Music-cover/8.jpg",
          source: "Resources/Music-player/Like My Father.mp3",
          url: "https://www.youtube.com/watch?v=D5InbVuOkkI",
          favorited: false
        },
        {
          name: "Eastside",
          artist: "Halsey, Khalid, Benny Blanco",
          cover: "Resources/Music-cover/9.jpg",
          source: "Resources/Music-player/Eastside.mp3",
          url: "https://www.youtube.com/watch?v=KFof8aaUvGY",
          favorited: false
        },
        {
          name: "Dream it Possible",
          artist: "Delacey",
          cover: "Resources/Music-cover/10.jpg",
          source: "Resources/Music-player/Dream it Possible.mp3",
          url: "https://www.youtube.com/watch?v=KFof8aaUvGY",
          favorited: false
        },
        {
          name: "Midnight Train",
          artist: "Sauti Sol",
          cover: "Resources/Music-cover/11.jpg",
          source: "Resources/Music-player/Midnight Train.mp3",
          url: "https://www.youtube.com/watch?v=z1TZUJI50Hw",
          favorited: false
        },
        {
          name: "If the World Was Ending",
          artist: "Julia Michaels, JP Saxe",
          cover: "Resources/Music-cover/12.jpg",
          source: "Resources/Music-player/If the World Was Ending.mp3",
          url: "https://www.youtube.com/watch?v=zb_IOQhHvsE",
          favorited: false
        },
        {
          name: "Acapulco",
          artist: "Jason Derulo",
          cover: "Resources/Music-cover/13.jpg",
          source: "Resources/Music-player/Acapulco.mp3",
          url: "https://www.youtube.com/watch?v=Puuv-d9cTZE",
          favorited: false
        },
        {
          name: "Stronger",
          artist: "Kelly Clarkson",
          cover: "Resources/Music-cover/14.jpg",
          source: "Resources/Music-player/Stronger.mp3",
          url: "https://www.youtube.com/watch?v=XSvlIBhpFM8",
          favorited: false
        },
        {
          name: "Waka Waka",
          artist: "Shakira",
          cover: "Resources/Music-cover/15.jpg",
          source: "Resources/Music-player/Waka Waka.mp3",
          url: "https://www.youtube.com/watch?v=czWcyZRAMtk",
          favorited: false
        },
        {
          name: "Wavin' Flag",
          artist: "K'naan",
          cover: "Resources/Music-cover/16.jpg",
          source: "Resources/Music-player/Wavin' Flag.mp3",
          url: "https://www.youtube.com/watch?v=WTJSt4wP2ME",
          favorited: false
        },
        {
          name: "Jericho",
          artist: "Jason Derulo",
          cover: "Resources/Music-cover/17.jpg",
          source: "Resources/Music-player/Jericho.mp3",
          url: "https://www.youtube.com/watch?v=sAZaVEkHq28",
          favorited: false
        },
        {
          name: "Awesome God/God Only Knows (Campfire Medley)",
          artist: "Bailee Madison, Kevin Quinn, Kat Conner Sterling, Jahbril Cook, Iain Tucker",
          cover: "Resources/Music-cover/18.jpg",
          source: "Resources/Music-player/Campfire Medley.mp3",
          url: "https://www.youtube.com/watch?v=_xEDCg-9lIw",
          favorited: false
        },
        {
          name: "I Know Who I Am",
          artist: "Sinach",
          cover: "Resources/Music-cover/19.jpg",
          source: "Resources/Music-player/I Know Who I Am.mp3",
          url: "https://www.youtube.com/watch?v=frtZ4XfoXxM",
          favorited: false
        },
        {
          name: "Worlds Greatest Lyrics",
          artist: "R. Kelly",
          cover: "Resources/Music-cover/20.jpg",
          source: "Resources/Music-player/Worlds Greatest Lyrics.mp3",
          url: "https://www.youtube.com/watch?v=wkzRHxd_4ZE",
          favorited: false
        },
        {
          name: "SpongeBob Theme Song",
          artist: "Stephen Hillenburg, Blaise Smith, Mark Harrison",
          cover: "Resources/Music-cover/21.jpg",
          source: "Resources/Music-player/SpongeBob.mp3",
          url: "https://youtube.com/shorts/pFfUunOS1a4?feature=share",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    },
    handleSpacebar(event) {
      if (event.keyCode === 32) {
        event.preventDefault();
        this.play();
      }
    },
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
    document.addEventListener("keydown", this.handleSpacebar);
  },
  destroyed() {
    document.removeEventListener("keydown", this.handleSpacebar);
  },
  }
);
