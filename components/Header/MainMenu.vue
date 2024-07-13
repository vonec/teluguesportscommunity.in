<template>
    <!-- Menu Start -->
    <div class="px-8 hidden lg:block">
        <nav>
            <ul class="flex">
                <li class="relative mr-14 group z-10 before:bg-nav-shape before:content-[''] before:absolute before:w-23.5 before:h-11 before:z-n1 before:top-1/2 before:left-1/2 before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:transition-all before:opacity-0 hover:before:opacity-100">
                    <NuxtLink to="/" class="text-white uppercase font-bold font-exo relative">Home</NuxtLink>
                </li>
                <li class="relative mr-14 group z-10 before:bg-nav-shape before:content-[''] before:absolute before:w-23.5 before:h-11 before:z-n1 before:top-1/2 before:left-1/2 before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:transition-all before:opacity-0 hover:before:opacity-100">

                    <NuxtLink to="/" class="text-white uppercase font-bold font-exo relative">Match</NuxtLink>
                    <ul class="flex flex-col bg-white absolute w-56 px-5 py-5 rounded left-0 right-auto top-12 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all group-hover:top-9">
                        <li>
                            <NuxtLink to="/match" class="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">Match Page</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/match/1" class="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">Match Details</NuxtLink>
                        </li>
                    </ul>

                </li>
                <li class="relative mr-14 group z-10 before:bg-nav-shape before:content-[''] before:absolute before:w-23.5 before:h-11 before:z-n1 before:top-1/2 before:left-1/2 before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:transition-all before:opacity-0 hover:before:opacity-100">

                    <NuxtLink to="/" class="text-white uppercase font-bold font-exo relative">Pages</NuxtLink>
                    <ul class="flex flex-col bg-white absolute w-56 px-5 py-5 rounded left-0 right-auto top-12 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all group-hover:top-9">
                        <li>
                            <NuxtLink to="/about" class="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">About Us</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/game" class="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">All Games</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/game/1" class="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">Game Details</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/player" class="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">Players</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/player/1" class="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">Player Details</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/battleteam" class="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">Battle Teams</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/battle/gamer" class="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">Single Battle</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/FAQ" class="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">FAQ</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/404Error" class="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">404-Error</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/signup" class="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">SignUp</NuxtLink>
                        </li>
                    </ul>

                </li>
                <li class="relative mr-14 group z-10 before:bg-nav-shape before:content-[''] before:absolute before:w-23.5 before:h-11 before:z-n1 before:top-1/2 before:left-1/2 before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:transition-all before:opacity-0 hover:before:opacity-100">
                    <NuxtLink to="/" class="text-white uppercase font-bold font-exo relative">Blog</NuxtLink>
                    <ul class="flex flex-col bg-white absolute w-56 px-5 py-5 rounded left-0 right-auto top-12 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all group-hover:top-9">
                        <li>
                            <NuxtLink to="/blog-without-sidebar" class="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">Blog Without Sidebar Page</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/blog-right-sidebar" class="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">Blog Right Sidebar</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/blog-left-sidebar" class="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">Blog Left Sidebar</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/blog-grid-right-sidebar" class="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">Blog Grid Right Sidebar</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/blog-grid-left-sidebar" class="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">Blog Grid Left Sidebar</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/blog-grid-without-sidebar" class="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">Blog Grid Without Sidebar</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/blog/1" class="text-sm font-medium block leading-8 capitalize text-black transition-all hover:text-primary">Blog Details</NuxtLink>
                        </li>
                    </ul>
                </li>
                <li class="relative mr-14 z-10 before:bg-nav-shape before:content-[''] before:absolute before:w-23.5 before:h-11 before:z-n1 before:top-1/2 before:left-1/2 before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:transition-all before:opacity-0 hover:before:opacity-100">
                    <NuxtLink to="/contact" class="text-white uppercase font-bold font-exo relative">Contact</NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
    <!-- Menu End -->
</template>