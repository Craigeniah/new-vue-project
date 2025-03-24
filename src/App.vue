<style scoped>
  /* header {
    line-height: 1.5;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  } */
</style>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->

    <header class="">
        <div class="container">
            <nav class="navbar navbar-light" role="navigation">
                <a class="navbar-brand" href="#intro"><h1>Craig Cooper</h1></a>
                <button 
                    id="navbarTogglerButton"
                    class="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                <!-- <span class="navbar-toggler-icon"></span> -->
                <div id="menuToggle" ref="menuToggle">
                    <!--
                    A fake / hidden checkbox is used as click reciever,
                    so you can use the :checked selector on it.
                    -->
                    <input id="menuCheckBox" type="checkbox" v-model="menuCheckBox" />
                    
                    <!--
                    Some spans to act as a hamburger.
                    
                    They are acting like a real hamburger,
                    not that McDonalds stuff.
                    -->
                    <span></span>
                    <span></span>
                    <span></span>
                    
                </div>
                </button>
            </nav>
            <!-- @TODO make link lines grow/shrink on hover on/off -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0 pb-4 text-right">
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="#app" @click="menuClick">About Me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="#myWork" @click="menuClick">My Work</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="#contactMe" @click="menuClick">Contact Me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" target="_blank" href="/files/resume-9-3-24.pdf" @click="menuClick">Download Resume</a>
                    </li>
                </ul>
            </div>

        </div>
    </header>

    <main>

        <section id="intro" class="py-3">
              <div class="container">
                  <div class="row py-3">
                      <div class="col-12 col-md-5">
                          <img class="img-border w-100" id="picOfMe" src="/images/husband-wife-photo-2-min.jpg">
                      </div>
                      <div class="col-12 col-md-7 d-flex flex-column justify-content-center">
                          <h1 class="title pb-3 mt-4 mt-md-0">
                              Hi, I'm Craig! <br>
                              A Kingdom-Minded <br>
                              Front-End Web-Developer
                          </h1>
                          <blockquote><p>"So whether you eat or drink or whatever you do, do it all for the glory of God." - 1 Corinthians 10:31</p></blockquote>
  
                          <div class="">
                              <a href="#contactMe" class="btn btn-primary btn-lg down-arrow mr-2 my-1">Contact Me</a>
                              <a href="#myWork" class="btn btn-secondary btn-lg down-arrow mr-1 my-1">View My Work</a>
                          </div>
                      </div>
                  </div>
  
                  <div class="row py-3">
                      <div class="col">
  
                          <h2>About Me</h2>
  
                          <h3>Career Objective</h3>
                          <p>
                              Front-end web developer with ten plus years of experience. I care about excellence and have a knack for minding the fine details. While HTML and CSS are my primary strengths, I'm also a strong communicator both verbally and digitally and can work between multiple teams to accomplish complicated problems utilizing technology. I am interested in a Full time, hybrid to remote position that will allow me to continue to hone my skills and make an impact beyond myself for the greater whole.
                          </p>
  
                          <h3>Personality</h3>
                          <p>
                              First and formost I'm a Christian, born and raised in Indiana. I come from a small dot on the map called Middlebury, however since 2021 I reside 
                              in Indianapolis the states capital. My faith drives me to practice excellence in every aspect of my life and I'm a firm believer in honesty 
                              and integrity.
                          </p>
                          <p>Some hobbies of mine are:</p>
                          <ul>
                              <li>Trying different craft beers and visiting micro breweries</li>
                              <li>Researching and enjoying fine handmade cigars</li>
                              <li>I enjoy open world RPGs and other video games of that nature</li>
                              <li>Reading books like the Lord of the Rings</li>
                              <li>Hopping on my old skateboard and trying not to embarress myself</li>
                              <li>Watching fantasy, sci-fi and anime movies and shows</li>
                          </ul>
  
                      </div>
                  </div>
  
              </div>
          </section>

          <section id="myWork" class="pt-3 pb-5">
  
            <div class="container">
                <div class="row">
                    <div class="col-12">

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h3 class="modal-title" id="exampleModalLabel">{{ currentProject.name }}</h3>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <img class="img-fluid img-border" :src="currentProject.img_src">
                                    </div>
                                    <div class="text-left px-3">
                                        <h4>Description:</h4>
                                        <p>{{ currentProject.description }}</p>
                                        <div class="tech-used">
                                            {{ currentProject.techs }}
                                        </div>
                                        <div v-show="currentProject.url" class="mt-3">
                                            <small>Note: Link subject to breaking.</small>
                                            <div class="d-block mx-auto mt-1">
                                                <a target="_blank" :href="currentProject.url" class="btn btn-primary">View Live Example</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2>My Work</h2>
                        
                        <div class="row my-4">
                          <div 
                            class="col-12 col-md-3 my-2 justify-content-between portfolio-items" 
                            v-for="portfolioItem in portfolioItems" 
                            :key="portfolioItem.id"
                          > 
                            <!-- @TODO Make Modal / Pop Up with More Details -->
                            <!-- @TODO paginate 8 per page -->
                            <!-- @TODO image hover effects -->

                            <a 
                                @click="portfolioClick(portfolioItem)"
                                href="#" 
                                data-toggle="modal" 
                                data-target="#exampleModal"
                            >
                                <img 
                                    class="img-fluid img-border mb-3" 
                                    :src="portfolioItem.thumbnail_src"
                                >
                                <h4 class="portfolio-headings text-light">{{ portfolioItem.name }}</h4>
                            </a>
                            <!-- <a 
                                @click="alert('clicked')"
                                class="portolio-links text-light"
                                href="#"  
                                data-toggle="modal" 
                                data-target="#exampleModal"
                            >
                                
                            </a> -->
                          </div>
                        </div> 
                        <div class="row">
                            <div class="col-12 text-center">
                                <a class="btn btn-primary btn-lg" href="https://www.behance.net/virtualcrasis" target="_blank">Load More Work</a>
                            </div>
                        </div> 

                    </div>
                </div>
            </div>

        </section>

    </main>

    <footer class="py-5 mt-0">
        <div class="container">
            <div class="row">
                <div class="col-12" id="contactMe">
                    <h2>Contact Me</h2>
                </div>
            </div>
            <div class="row pt-5 footer-inner-container">
                <!-- contact form part 1 -->
                <div class="col-8" id="footerFormContainer">
                    <form name="portfolio-site-contact" netlify>
                        <div class="form-group">
                            <label for="exampleInputName">Name</label>
                            <input type="text" class="form-control" id="exampleInputName" name="name" required>
                        </div>
                        <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" required aria-describedby="emailHelp" name="email">
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" required rows="3" name="message"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Send</button>
                    </form>
                </div>
                
                <div class="col-4 d-flex justify-content-center align-items-center flex-column" id="footerSocialMediaContainer">
                    <!-- social medias -->
                    <a href="https://github.com/Craigeniah" target="_blank" title="Github">
                        <img src="/images/icons/github-brands-solid-white.svg" alt="Github" class="social-icons d-block">
                    </a>
                    <a href="https://www.linkedin.com/in/craigtcooper/" target="_blank" title="Github">
                        <img src="/images/icons/linkedin-brands-solid-white.svg" alt="LinkedIn" class="social-icons d-block">
                    </a>
                    
                </div>
            </div>
            <div class="row">
                <div class="col-12 text-center text-md-left pt-3">
                    <!-- @TODO add javascript year dynamically -->
                    <small>&copy; 2025 All Rights Reserved</small>
                </div>
            </div>
        </div>
    </footer> 

</template>

<script setup>
    import { ref } from 'vue';
    // see: https://vuejs.org/guide/extras/reactivity-transform.html
    // import { $ref } from 'vue/macros'
    // import HelloWorld from './components/HelloWorld.vue'
    // import TheWelcome from './components/TheWelcome.vue'

    let currentProject = ref([
        // {id: ''},
        // {name: ''},
        // {thumbnail_src: ''},
        // {img_src: ''},
        // {description: ''},
        // {techs: ''},
        // {url: ''},
    ]);

    const portfolioItems = ref([
        { 
            id: 1,
            name: `Free Women's Clinic`,
            thumbnail_src: 'dist/images/freewomensclinic-project-min.jpg',
            img_src: 'dist/images/project-2.jpg',
            description: "Built on top of a Laravel using VUE.js, I utilized data from an in-house API and Google Maps JS API to allow clients to book their own appointments per location nearest to them.",
            techs: 'VUE.js, Laravel, HTML5, CSS3, Javascript, PHP, Google Maps,',
            url: 'https://freewomensclinic.mobi/schedule-an-appointment#Schedule',
        },
        // @TODO fix this broken link, make new page like easter etc
        { 
            id: 2,
            name: 'PreBorn! Annual Report',
            thumbnail_src: 'dist/images/project-1.jpg',
            img_src: 'dist/images/project-1.jpg',
            description: "Mobile first, responsivly designed annual report page. Starting from an Indesign file, taken from design to code. Features a full screen menu, sticky CSS headers and CSS animations.",
            techs: 'HTML5, CSS3, Javascript, VUE.js, WordPress, AdobeCC',
            url: 'https://preborn.org/annual-report-2020/',
        },
        { 
            id: 3,
            name: 'Will & Estate Page',
            thumbnail_src: 'dist/images/project-3.jpg',
            img_src: 'dist/images/project-3.jpg',
            description: "Following design, rebuilt into a page on employers WordPress site. Page uses various CSS animations and interactive components",
            techs: 'HTML5, CSS3, WordPress, AdobeCC',
            url: 'https://preborn.org/estate-planning/',     
        },
        { 
            id: 4,
            name: 'Baby Bottle Campaign',
            thumbnail_src: 'dist/images/project-5.jpg',
            img_src: 'dist/images/project-5.jpg',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut expedita iste perspiciatis voluptas voluptates sapiente corporis atque asperiores," +
            "quod nisi at quaerat totam! Non perspiciatis facilis laborum tempora beatae quas.",
            techs: '',
            url: 'portfolio-pages/bottle.html',     
        },
        { 
            id: 5,
            name: 'Easter Countdown',
            thumbnail_src: 'dist/images/project-6.jpg',
            img_src: 'dist/images/project-6.jpg',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut expedita iste perspiciatis voluptas voluptates sapiente corporis atque asperiores," +
            "quod nisi at quaerat totam! Non perspiciatis facilis laborum tempora beatae quas.",
            techs: 'Javascript, HTML, CSS',
            url: 'portfolio-pages/easter.html',     
        },
        { 
            id: 6,
            name: 'Lippert Components',
            thumbnail_src: 'dist/images/lippert-websites-min.jpg',
            img_src: 'dist/images/lippert-websites-min.jpg',
            description: "A previous employer, here I worked on various subsidary websites, landing pages and projects along side other team members. Most notable would be the work done on " +
            "LCI1.com, & TaylorMadeProducts.com. Another noteable item would be the website and boat trailer configurator I helped build with another internal team for extremetrailers.com",
            techs: 'Javascript, VUE, jQuery, Bootstrap, PHP, CSS, HTML, HUGO, MODX, GA, GTM',
            url: 'https://www.lci1.com',      
        },
        { 
            id: 7,
            name: 'The Invitation Webinar',
            thumbnail_src: 'dist/images/project-4.jpg',
            img_src: 'dist/images/project-4.jpg',
            description: "Built a simple landing page for a webinar promotion from PDF design to code.",
            techs: 'HTML5, CSS3',
            url: 'https://theinvitation.app/webinar',   
        },
        { 
            id: 8,
            name: 'Team RV Express',
            thumbnail_src: 'dist/images/team-rv-express.jpg',
            img_src: 'dist/images/team-rv-express.jpg',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut expedita iste perspiciatis voluptas voluptates sapiente corporis atque asperiores," +
            "quod nisi at quaerat totam! Non perspiciatis facilis laborum tempora beatae quas.",
            techs: 'WordPress, HTML, CSS, Javascript, PHP',
            url: 'https://www.behance.net/gallery/29426491/Team-RV-Express-Responsive-Website',    
        }
    ]);

    let portfolioItemsToShow = 4;

    function portfolioClick(portfolioItem) {

        currentProject.value = portfolioItem;
        // console.log(currentProject);
    }

    const menuToggle = ref();
    const menuCheckBox = ref(false);

    /**
     * Description: Toggles the Hamburger Icon by Dynamically Clicking the menuToggle button and checking/unchecking the input checkbox.
     * The checkbox styles are then manipulated by the CSS to show the menu.
     * The Actual logic to show/hide the menu is done with Bootstrap.
     */
    function menuClick() {

        menuToggle.value.click();
        if (menuCheckBox.value === true) {
            menuCheckBox.value = false;
        } else {
            menuCheckBox.value = true;
        }
    }


</script>