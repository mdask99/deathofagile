<script>
	import Skull from '$lib/components/icons/Skull.svelte';
	import Tombstone from '$lib/components/icons/Tombstone.svelte';
	import CrossedBones from '$lib/components/icons/CrossedBones.svelte';

	const values = [
		{ left: 'Clarity of Intent', right: 'Granularity of Tasks' },
		{ left: 'Continuous Generation', right: 'Timeboxed Sprints' },
		{ left: 'System Architecture', right: 'Syntax Memorization' },
		{ left: 'Asynchronous Momentum', right: 'Synchronous Ceremonies' }
	];
</script>

<svelte:head>
	<title>Death of Agile — Manifesto</title>
	<meta
		name="description"
		content="Agile is dead. Hijacked by bureaucracy, weaponized by middle management, and rendered obsolete by AI. Meet Agentic Flow."
	/>
</svelte:head>

<section
	class="relative overflow-hidden border-b border-dashed border-stone-300 dark:border-stone-700"
>
	<div class="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
		<Tombstone
			class="absolute -right-8 top-8 size-48 rotate-8 text-stone-400/40 dark:text-stone-600/45"
			epitaph="AGILE"
		/>
		<Skull
			class="absolute -bottom-10 -left-6 size-32 -rotate-12 text-stone-400/35 dark:text-stone-600/40"
		/>
		<CrossedBones
			class="absolute right-1/4 bottom-6 size-20 rotate-[-16deg] text-stone-400/30 dark:text-stone-600/35"
		/>
	</div>

	<div class="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
		<p
			class="inline-flex items-center gap-2 rounded-full border border-dashed border-rose-400/70 bg-stone-50/80 px-3 py-1 font-mono text-xs font-medium text-rose-700 dark:border-rose-500/50 dark:bg-stone-950/70 dark:text-rose-400"
		>
			<Skull class="size-3.5" />
			<span>RIP · 00 / Manifesto</span>
		</p>

		<h1
			class="mt-6 max-w-4xl font-mono text-5xl font-semibold tracking-tight text-stone-950 sm:text-6xl md:text-7xl dark:text-stone-50"
		>
			Agile is Dead.
		</h1>
		<p
			class="mt-6 max-w-2xl text-xl leading-relaxed text-stone-700 sm:text-2xl dark:text-stone-300"
		>
			Hijacked by bureaucracy. Weaponized by middle management. Rendered obsolete by AI.
		</p>

		<div class="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
			<a
				href="/autopsy"
				class="inline-flex items-center justify-center gap-2 rounded-full border border-stone-950 bg-stone-950 px-5 py-2.5 font-mono text-sm font-medium text-stone-50 transition-colors hover:bg-rose-700 hover:border-rose-700 dark:border-stone-50 dark:bg-stone-50 dark:text-stone-950 dark:hover:border-rose-400 dark:hover:bg-rose-400"
			>
				<Tombstone class="size-4" />
				Read the autopsy
			</a>
			<a
				href="/new-standard"
				class="inline-flex items-center justify-center gap-2 rounded-full border border-dashed border-stone-400 bg-stone-50/80 px-5 py-2.5 font-mono text-sm font-medium text-stone-800 transition-colors hover:border-rose-500 hover:text-rose-700 dark:border-stone-600 dark:bg-stone-950/70 dark:text-stone-200 dark:hover:border-rose-400 dark:hover:text-rose-300"
			>
				<CrossedBones class="size-4" />
				The new standard
			</a>
		</div>
	</div>
</section>

<article
	class="prose prose-stone mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:prose-lg dark:prose-invert prose-headings:font-mono prose-headings:tracking-tight prose-headings:text-stone-950 dark:prose-headings:text-stone-50 prose-a:font-medium prose-a:text-rose-700 prose-a:no-underline prose-a:underline-offset-4 hover:prose-a:underline dark:prose-a:text-rose-400 prose-p:text-stone-700 dark:prose-p:text-stone-300"
>
	<section>
		<h2>From manifesto to industrial complex</h2>
		<p>
			In 2001, seventeen people wrote a one-page rebellion: individuals over processes, working
			software over documentation, collaboration over contract theater, responding to change over
			following a plan. It was a short, human document. It was also, as it turned out, a
			spectacularly successful franchise opportunity.
		</p>
		<p>
			What followed was not more software. It was the <strong>Agile Industrial Complex</strong>:
			scaled frameworks, certification ladders, and a calendar that treated meetings as the work.
			The two-week sprint became a unit of thought. Velocity became a currency. The board became
			the product.
		</p>
		<p>
			Call it <em>Agile-fall</em>: waterfall with sticky notes. You still committed six months of
			scope. You just sliced it into ceremonies so nobody had to say the word “project.” Standups
			became status radio. Retros became complaint hour with no authority. Planning poker became
			a ritual for guessing how long a human batch would take — then pretending the guess was
			science.
		</p>
	</section>

	<section>
		<h2>The SAFe grift</h2>
		<p>
			Enterprise scaling was the kill shot. Frameworks like SAFe promised to make Agile safe for
			the org chart: trains, PI Planning, layers of “release” roles, and a consultant class that
			sold the map as the territory. The pitch was coordination. The product was
			certification — badges that proved you could recite the process, not that you could ship.
		</p>
		<p>
			None of this is a dunk on every Scrum Master who tried to protect a team. It is an autopsy
			of a machine that optimized for looking busy in two-week increments. The original manifesto
			asked for working software. The industry asked for compliance. See the
			<a href="/autopsy">autopsy</a>
			and the
			<a href="/antipatterns">antipatterns</a>
			if you want the body laid out on the table.
		</p>
	</section>

	<section>
		<h2>Then the agents showed up</h2>
		<p>
			The two-week sprint assumed a human batch size. Estimate. Commit. Demo. Retro. An
			AI-assisted team can do a sprint’s worth of implementation in an afternoon. Agents do not
			wait for Friday. They do not burn down story points. They chew through a spec until review
			and production judgment become the bottleneck — not typing.
		</p>
		<p>
			When cycle time collapses, ceremony around estimation is waste. Capacity is no longer “how
			many humans in a room.” The scarce resources are taste, spec quality, and the courage to
			merge. That break is the
			<a href="/ai-paradigm">AI paradigm</a>
			in one sentence: the sprint is the wrong clock.
		</p>
	</section>

	<section>
		<h2>Agentic Flow</h2>
		<p>
			<strong>Agentic Flow</strong> is the successor: a continuous pipeline instead of a sprint
			container. Intent in. Agents execute. Humans review tightly. You ship. Cadence is the
			release, not the meeting. Planning is a living spec, not a PI board. Accountability stays
			human — at merge and in production — even when the first draft came from a model.
		</p>
		<p>
			This is not “no process.” It is process sized to agents and to people who still own the
			outcome. The full methodology lives on
			<a href="/new-standard">the new standard</a>. The values it stands on are below.
		</p>
	</section>
</article>

<section class="border-y border-dashed border-stone-300 dark:border-stone-700">
	<div class="mx-auto max-w-5xl px-4 py-16 sm:px-6">
		<aside
			class="scroll-mt-24 rounded-sm border-2 border-dashed border-rose-600 bg-stone-100/90 p-6 shadow-[6px_6px_0_0_rgba(87,83,78,0.15)] sm:p-10 dark:border-rose-500 dark:bg-stone-900/80 dark:shadow-[6px_6px_0_0_rgba(0,0,0,0.45)]"
			aria-labelledby="manifesto-heading"
		>
			<p
				class="inline-flex items-center gap-2 font-mono text-xs font-medium tracking-widest text-rose-700 uppercase dark:text-rose-400"
			>
				<CrossedBones class="size-4" />
				Foundational document
			</p>
			<h2
				id="manifesto-heading"
				class="mt-3 font-mono text-2xl font-semibold tracking-tight text-stone-950 sm:text-3xl dark:text-stone-50"
			>
				Manifesto for Agentic Flow
			</h2>

			<div
				class="mt-8 space-y-6 border-t border-dashed border-stone-300 pt-8 font-mono text-base leading-relaxed text-stone-800 dark:border-stone-600 dark:text-stone-200"
			>
				<p class="text-stone-500 italic dark:text-stone-400">
					We are uncovering better ways of shipping software by pairing humans with agents,
					and by recognizing the productivity gains and process improvements that let us
					develop software at scale.
				</p>
				<p class="text-stone-500 italic dark:text-stone-400">
					Through that work we have come to value:
				</p>
				<ul class="space-y-3 text-base not-italic sm:text-lg">
					{#each values as value}
						<li>
							<span class="font-semibold text-stone-950 dark:text-stone-50">{value.left}</span>
							<span class="text-stone-400 dark:text-stone-500"> over </span>
							<span class="text-stone-500 dark:text-stone-400">{value.right}</span>
						</li>
					{/each}
				</ul>
				<p class="text-stone-500 italic dark:text-stone-400">
					While there is still value in the items on the right, the reality of AI-assisted
					engineering demands we prioritize the items on the left.
				</p>
			</div>
		</aside>
	</div>
</section>
