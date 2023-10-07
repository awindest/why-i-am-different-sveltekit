<!--                                  
╭━━╮╱╱╱╱╭╮╱╱╱╱╱╭╮╱╭╮╱╱╱╱╱╭╮            ━╮ ╭━
╰┫┣╯╱╱╱╱┃┃╱╱╱╱╭╯╰╮┃┃╱╱╱╱╱┃┃             | |
╱┃┃╭━╮╭━╯┣━━┳━┻╮╭╯┃┃╱╱╭━━┫╰━┳━━╮       ╱ o \
╱┃┃┃╭╮┫╭╮┃┃━┫━━┫┃╱┃┃╱╭┫╭╮┃╭╮┃━━┫      ╱_____\
╭┫┣┫┃┃┃╰╯┃┃━╋━━┃╰╮┃╰━╯┃╭╮┃╰╯┣━━┃     ╱    o  \  
╰━━┻╯╰┻━━┻━━┻━━┻━╯╰━━━┻╯╰┻━━┻━━╯    (__o______)  

Yet another science experiment from Indest Labs.

Recommend viewing in Visual Source Code.
-->

<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	if (typeof window !== 'undefined') {
		gsap.registerPlugin(ScrollTrigger);
	}

	let panelsContainer;

	onMount(() => {
		runAnimation();
	});

	function runAnimation() {
		const panels = document.querySelectorAll('.panel');

		console.log('doin animations');

		panels.forEach((panel) => {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: panel,
					start: 'top 85%',
					end: 'top top',
					markers: false,
					scrub: true
				}
			});
			tl.fromTo(panel, { opacity: 0 }, { opacity: 1 });
		});

		let timeline = gsap.timeline();

		timeline // introductory tween
			.from('body', {
				background: '#ffffff',
				delay: 1,
				duration: 1,
				ease: 'none'
			})
			.fromTo(
				['h1', '.scroll-wrapper'],
				{
					opacity: 0,
					y: -200
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.6,
					ease: 'power1.out',
					delay: 2.0,
					stagger: 0.02
				},
				'-=1'
			);
		//start (element position, screen/viewport position)
		gsap.to('#title-container', {
			//fade title on scroll
			opacity: 0,
			scrollTrigger: {
				trigger: '#title-container',
				start: 'top top',
				end: 'bottom 50%',
				scrub: true,
				markers: false
			}
		});
	}
</script>

<svelte:head>
	<title>Why I Am Different in Comic Strip Format</title>
	<meta name="description" content="self-portrait to gain employment" />
</svelte:head>

<body>
	<div id="title-container">
		<h1>
			<p class="cBorder">why i am different</p>
		</h1>
		<div id="keep-scrolling" class="scroll-wrapper">
			<div id="animated-arrow" class="bounce-animation">
				<p id="scroll">Scroll</p>
				<svg width="40" height="10">
					<path d="M0,0L40,0L20,10Z" fill="#000" stroke="none" />
				</svg>
			</div>
		</div>
		<!-- end of keep-scrolling -->
	</div>
	<div id="remaining" />
	<div class="panel">
		<p class="cBorder">
			Communicate - First, I excel at making complex topics more palatable for customer consumption.
			I start with why and I treat the sales process more as a learning process for customers to not
			only understand our solution but to better comprehend the underlying technology. This leads to
			a better decision making process for the customer, they relax and we begin our trusted advisor
			relationship.
		</p>
	</div>
	<div class="panel">
		<p class="cBorder44">
			for example, in the context of showing a Data governance solution, I tell customers :

			<i style="font-family: CCItalic"
				>“You know ten or so years from now when we are no longer here and there is a new technology
				on the block, you are going to want to leave a legacy that makes it easier to transition to
				the new technology. How? With our solution You will be able to export all of your hard work
				and import it into your next technology.”</i
			>
		</p>
	</div>
	<div class="panel">
		<p class="cBorder">
			this customer empathy helps drive Revenue and customer satisfaction and helps start a trusting
			relationship.
		</p>
	</div>
	<div class="panel">
		<p class="cBorder44">
			Communicate - I focus on my written communication skills. I just finished the book, "smart
			brevity" and i am now applying the principles I learned from it. You may see some examples of
			my writing on my <a href="https://awindest.github.io">portfolio website</a>. My presentation
			style is relaxed and I try to be memorable. For example, after a day long technical
			presentation to the evaluation committee of a US federal reserve bank, we were asked,
			<i style="font-family: CCItalic"> "where is the next Bill show?" </i> Just goes to show you that
			even bankers can contribute to the fun during a software evaluation. (Yes, we won the deal.)
		</p>
	</div>

	<div class="panel">
		<p class="cBorder44">
			Curious - An important skill that sets me apart from other candidates is I am intellectually
			curious and not only want to learn new things but I thrive on it. I have a genuine interest in
			this position and want to learn more. I am continuously trying to improve my presentation and
			sales skills.
		</p>
	</div>
	<div class="panel">
		<p class="cBorder">
			For example, the best color to wear on a zoom call is blue. No stripes. Use a pointer or
			marker on the screen to draw your audience's eyes to what you want them to focus on. Have your
			head centered in the middle one-third of the screen and have your camera at eye level so you
			are looking straight at them, not down, or to the side or up. These are some of the tidbits
			that I learned to improve my presentation skills.
		</p>
	</div>
	<div class="panel">
		<p class="cBorder">
			Problem solver - I enjoy solving problems. even in the best of jobs problems will arise. The
			ability to solve these problems correctly and efficiently makes for a great employee and I
			consider myself such a person. Sure, there will be some problems that I will need to take to
			my boss or a fellow team mate but I try to solve it first prior to seeking help.
		</p>
	</div>
	<div class="panel">
		<p class="cBorder">
			Leader - I lead. Once i am trained and i have shadowed several other demonstrations, my hand
			will not need to be held through every little task and I am capable of leading others as well.
			I am independent and will excel in my role. I possess a great deal of motivation; I like being
			a rock star and I like helping others become rock stars. The more the merrier.
		</p>
	</div>
	<div class="panel">
		<p class="cBorder">
			Work ethic - as I mentioned previously I am driven to work hard. This trait is extremely
			valuable to the team. I don't have any qualms about spending the time to get something done.
			You do what you have to do to generate revenue.
		</p>
	</div>
	<div class="panel">
		<p class="cBorder">
			Plays well with others - not only am I a leader but I work well with a team. I know how to
			listen as much as I contribute and I take on my share of the workload to make sure we are all
			moving towards our common goals.
		</p>
	</div>

	<div class="panel">
		<p class="cBorder">Here are a few of the technologies with which I am acquainted...</p>
	</div>
	<div class="panel" style="padding: 0">
		<p class="cBorderImg">
			<img src="img/technologies.png" width="735" height="373" alt="A few technologies listed" />
		</p>
	</div>
	<div class="panel">
		<p class="cBorder">
			Humor - I am fortunate to possess a fairly robust sense of humor. Let me tell a few stories to
			illustrate.
		</p>
	</div>
	<div class="panel">
		<p class="cBorder44">
			I was getting ready to perform a software demonstration at a conference and a coworker was
			introducing me to a group of about forty people, saying, <i style="font-family: CCItalic"
				>"Bill will login as Lisa and do X and then login as George and do Y and then login as Robin
				and do Z."</i
			>
			I stepped up to the podium and on the spur of the moment, I said,
			<i style="font-family: CCItalic"
				>"Hi, I'm Bill Indest and I suffer from a multiple personality disorder."</i
			>
			Much to my surprise the entire room erupted in laughter.
		</p>
	</div>

	<div class="panel">
		<p class="cBorder44">
			Here is another example. We were on an internal team conference call (I wouldn't have said
			this on a customer call) and someone's big dog barked deeply and I immediately said,<i
				style="font-family: CCItalic"
				>"Sorry, that's my wife"
			</i> and everyone cracked up. To this day, we reminisce about that call and laugh. And of course
			my wife knows of my antics.
		</p>
	</div>
	<div class="panel">
		<p class="cBorder44">
			Finally, here are some life rules that I try to follow: 🚀 <br />
			<b style="font-family: CCBoldItalic">
				do not speak poorly about others <br /> 'I can' trumps IQ<br />
				you do not need a title to lead
				<br /> always meet deadlines <br />deliver outside your job description <br />
				keep up with technology <br /> share the credit<br /> measure outcomes<br />
				share your intent
				<br /> stop chasing shortcuts; do the work <br /> learn to anticipate<br />
				maintain a positive outlook<br /> invest in yourself<br />lift others and you become the
				ladder
				<br /> learn customer service <br />learn and appreciate the art of storytelling</b
			>
		</p>
	</div>
	<div class="panel">
		<p class="cBorder">The beginning . . .</p>
	</div>

	<div>
		<p />
	</div>
</body>
