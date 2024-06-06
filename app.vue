<template>
  <div class="bg-[#001835] overflow-x-hidden max-w-full" id="top">
    <header class="" v-scroll-spy-link>
      <nav class="absolute container inset-x-0 top-0 z-50 flex items-center justify-between p-6 lg:px-8"
           aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">EveryDayMoney</span>
            <NuxtImg class="h-8 w-auto" src="/full-logo.svg" alt="Full width logo"/>
          </a>
        </div>
        <div class="flex items-center">
          <div class="flex lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    @click="mobileMenuOpen = true">
              <span class="sr-only">Open main menu</span>
              <UIcon name="i-heroicons-bars-2" class="h-6 w-6 text-white" aria-hidden="true"/>
            </button>
          </div>
          <div class="hidden lg:flex lg:gap-x-12">
            <a v-for="item in navigation" :key="item.name" :href="`#${item.href}`" v-scroll-spy-link
               class="text-xs font-light leading-6 text-white">{{ item.name }}</a>
          </div>
          <div class="hidden lg:ml-28 lg:flex gap-12 lg:flex-1 lg:justify-end items-center">
            <a href="https://business.everydaymoney.app/auth/login" class="text-white font-light text-xs">Login</a>
            <a type="button" href="https://calendly.com/d/ckhw-fph-hqv"
               class="bg-[#1C5ED3] rounded-[22px] bold py-2 px-10  text-xs font-light leading-6 text-white">Sign Up</a>
          </div>
        </div>
      </nav>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50"/>
        <DialogPanel
            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#001835] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">EveryDayMoney</span>
              <NuxtImg class="h-8 w-auto" src="/logo.svg" alt="Full width logo"/>
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <UIcon name="i-heroicons-x-mark" class="h-6 w-6 text-white" aria-hidden="true"/>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                   class="-mx-3 block rounded-[22px] px-7 py-2 font-semibold text-base leading-7 text-white hover:text-[#1C5ED3] hover:bg-gray-50">{{
                    item.name
                  }}
                </a>
              </div>
              <div class="py-6">
                <a href="https://business.everydaymoney.app/auth/login"
                   class="-mx-3 block rounded-[22px] px-7 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800">Log
                  in</a>
                <a href="https://calendly.com/d/ckhw-fph-hqv"
                   class="-mx-3 block rounded-[22px] px-7 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800">Sign
                  up</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <div class="relative isolate pt-14">

      <div class="absolute inset-x-0 top-[50%] translate-y-[-50%] -z-10 transform-gpu overflow-hidden opacity-5"
           aria-hidden="true">
        <NuxtImg class="md:w-[50%] w-full" src="/header-logo.svg"/>
      </div>
      <div class="pt-24 sm:pt-32">
        <div class="container px-6 lg:px-8">
          <div class="mx-auto w-full
           text-center">
            <h1 class="text-4xl font-bold tracking-tight text-white md:text-7xl">Manage Your Startup's OpEx Efficiently
              with EverydayMoney</h1>
            <p class="mt-6 md:text-2xl text-lg leading-8 font-light text-[#90A3BF]">Sustain your financial runway and
              gain insights into your day-to-day expenses.</p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a href="https://calendly.com/d/ckhw-fph-hqv"
                 class="rounded-[22px] bg-[#1C5ED3] px-7 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C5ED3]">Get
                a Free Demo</a>
              <a href="#pricing"
                 class="text-sm rounded-[22px] px-7 py-2.5 font-semibold bg-[#1A202C] leading-6 text-white">See
                Pricing</a>
            </div>
          </div>
          <div class="mt-16 flow-root sm:mt-24">
            <div
                class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <NuxtImg src="/app-screenshot.png" alt="App screenshot"
                       class="rounded-md shadow-2xl ring-1 ring-gray-900/10"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white relative py-24 isolate min-h-[60vh]" id="about">
      <div class="container px-6 lg:px-8">
        <h4 class="text-center text-lg">About Us</h4>
        <h2 class="font-bold text-[#1C5ED3] text-4xl text-center my-4 tracking-tight">Helping Startups Manage
          Operational Expenses</h2>
        <p class="text-[#596780] text-lg max-w-2xl mx-auto text-center opacity-[.64]">EverydayMoney helps startups
          manage
          their operational expenses (OpEx) effectively. We provide tools to schedule expenses, control spending, and
          sustain your financial runway. Join us to gain insights and take control of your business's finances.</p>
        <div
            class="mx-auto grid max-w-2xl grid-cols-1 mt-16 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div>
            <dl class="max-w-xl pl-10 space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                <dt>
                  <div class="absolute left-[-30px] rounded-[16px] p-3 bg-[#FF5D31] top-1 text-[#1C5ED3]">
                    <NuxtImg :src="`/${feature.icon}.svg`" class="w-5"/>
                  </div>
                  <span class="text-2xl text-[#040815] font-medium">{{ feature.name }}</span>
                </dt>
                {{ ' ' }}
                <dd class="text-sm text-[#596780]">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
          <NuxtImg src="/product.svg"
                   alt="Product screenshot"
                   class="w-full"/>
        </div>
      </div>
    </div>
    <div class="relative isolate py-24 min-h-[60vh]" id="how-it-works">
      <div class="container px-6 lg:px-8">
        <div class="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden"
             aria-hidden="true">
          <NuxtImg class="w-full" src="/fullbg-logo.svg"/>
        </div>
        <h4 class="uppercase text-sm text-center font-semibold text-[#1C5ED3]">How it Works</h4>
        <h2 class="tracking-[-.3px] text-2xl max-w-2xl mx-auto text-white my-4 text-center font-black">Few Easy Steps
          and Done</h2>
        <p class="max-w-lg mb-14 mx-auto text-center text-[#90A3BF] tracking-[-.2px]">In just few easy step, you are
          all set to manage your business finances. Manage all expenses with EverdayMoney all in one place.</p>
        <div class="grid w-full md:grid-cols-3 gap-16 max-w-3xl mx-auto">
          <div class="flex flex-col gap-4" v-for="howTo in howTos" :key="howTo.title">
            <NuxtImg class="w-full" :src="`/${howTo.img}.svg`" :alt="howTo.title"/>
            <p class="pl-8 text-center text-white">{{ howTo.title }}</p>
          </div>
        </div>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="https://calendly.com/d/ckhw-fph-hqv"
             class="rounded-[22px] bg-[#1C5ED3] px-7 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C5ED3]">Get
            started for Free</a>
          <a href="#pricing"
             class="text-sm rounded-[22px] px-7 py-2.5 font-semibold bg-[#1A202C] leading-6 text-white">See Pricing</a>
        </div>
      </div>
    </div>
    <div class="bg-white relative isolate py-24 min-h-[60vh]" id="services">
      <div class="container px-6 lg:px-8">
        <h4 class="font-medium mb-4">Services</h4>
        <div class="grid md:grid-cols-[1fr_2fr] gap-10">
          <h3 class="text-[#1C5ED3] tracking-tight text-2xl font-semibold">Do even more with EverydayMoney</h3>
          <p class="text-[#596780] tracking-tight">
            Unlock the Full Potential of Your Startup with Our Comprehensive Suite of Tools and Solutions
            Designed to Optimize Operational Expense Management, Enhance Financial Planning, and Sustain Your
            Business Growth 
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-10 mt-16">
          <div class="">
            <h4 class="tracking-tight text-lg font-semibold mb-2">Carryout local & cross-border transfer</h4>
            <ul class="list-disc pl-7">
              <li> Pay suppliers from any part of the world  Pay by transfers</li>
              <li> Pay by transfers</li>
              <li> Refund employees</li>
            </ul>
          </div>
          <div class="">
            <h4 class="tracking-tight text-lg font-semibold mb-2">Card Management</h4>
            <ul class="list-disc pl-7">
              <li> Issue Virtual Cards for all online payments</li>
              <li> Issue Physical cards for off-line and online payments</li>
              <li> Assign Virtual and Physical cards to budgets</li>
              <li> Assign Payment cards to Employees</li>
            </ul>
            <h4 class="tracking-tight text-lg mt-10 font-semibold mb-2">Accounting</h4>
            <ul class="list-disc pl-7">
              <li>Synchronise your expense data with your accounting software</li>
            </ul>
          </div>
          <div class="">
            <h4 class="tracking-tight text-lg font-semibold mb-2">Payroll</h4>
            <ul class="list-disc pl-7">
              <li> Employee management</li>
              <li> Pay Your Employees </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="relative isolate py-24 bg-[#FF5D31] min-h-[60vh]">
      <div class="container px-6 lg:px-8">
        <h4 class="uppercase text-sm text-center font-semibold text-[#0D243F]">What they say</h4>
        <h2 class="tracking-[-.3px] text-2xl max-w-2xl mx-auto text-white my-4 text-center font-black">Our Users Kind
          Words</h2>
        <p class="max-w-lg mb-14 mx-auto text-center text-white tracking-[-.2px]">Hear from startups like yours about
          how EverydayMoney has transformed their operational expense management and helped sustain their financial
          runway.</p>
        <div class="mt-16">
          <UCarousel v-slot="{ item, index }" ref="carouselRef" :items="carouselItems"
                     :ui="{ container: 'gap-10', item: 'snap-start lg:w-1/3 sm:w-1/2 w-full', arrows: { wrapper:
                     'slider-icons'
                     } }"
                     arrows>
            <figure class="rounded-[16px] flex flex-col justify-between bg-[#FF3F0A] p-8 text-sm leading-6">
              <div>
                <h4 class="text-white font-bold mb-2">{{ item.title }}</h4>
                <blockquote class="text-white">
                  <p>{{ `“${item.subtitle}”` }}</p>
                </blockquote>
              </div>
              <figcaption class="mt-6 flex items-center gap-x-4">
                <NuxtImg class="h-10 w-10 rounded-[16px] bg-gray-50" :src="`/${item.avatar.src}.png`" alt=""/>
                <div>
                  <div class="font-semibold text-white">{{ item.name }}</div>
                  <div class="text-white">{{ `${item.position}` }}</div>
                </div>
              </figcaption>
            </figure>
          </UCarousel>
        </div>
      </div>
    </div>

    <div class="bg-white py-24 sm:py-32" id="pricing">
      <div class="container px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <p class="mt-2 text-3xl font-black text-[#0D121F] sm:text-4xl tracking-[-.3px]">Ready to Get Started?</p>
        </div>
        <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-[#596780] tracking-[-.2px]">Choose a plan
          that suits your
          business needs</p>
        <div class="mt-16 flex justify-center">
          <RadioGroup v-model="frequency"
                      class="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200">
            <RadioGroupLabel class="sr-only">Payment frequency</RadioGroupLabel>
            <RadioGroupOption as="template" v-for="option in frequencies" :key="option.value" :value="option" v-slot="{
                        checked }">
              <div
                  :class="[checked ? 'bg-[#1C5ED3] text-white' : 'text-gray-500', 'cursor-pointer rounded-full px-2.5 py-1']">
                <span>{{ option.label }}</span>
              </div>
            </RadioGroupOption>
          </RadioGroup>
        </div>
        <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div class="p-6 rounded-[16px] flex flex-col justify-between bg-[#F3F5F7]" v-for="tier in pricingTiers"
               :key="tier.id">
            <div>
              <div class="flex items-center justify-between gap-x-4">
                <div class="flex items-center gap-2">
                  <NuxtImg :src="`${tier.name.toLowerCase()}-tier.svg`" class="w-5" :alt="tier.name"/>
                  <h3 :id="tier.id"
                      :class="[tier.mostPopular ? 'text-[#1C5ED3]' : 'text-gray-900', 'text-lg font-semibold leading-8']">
                    {{ tier.name }}</h3>
                </div>
                <p v-if="tier.mostPopular"
                   class="rounded-full bg-[#0D243F] px-2.5 py-1 text-xs leading-5 text-white">Most
                  popular</p>
              </div>
              <p class="mt-4 text-sm leading-6 text-[#596780]">{{ tier.miniDesc }}</p>
              <p class="mt-6 flex items-baseline gap-x-1">
                <span class="text-4xl font-bold tracking-tight text-gray-900">{{ tier.price[frequency.value] }}</span>
                <span class="text-sm font-semibold leading-6 text-gray-600">{{ frequency.priceSuffix }}</span>
              </p>
              <p class="mt-4 text-sm leading-6 text-[#1A202C]">{{ tier.description }}</p>
              <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
                <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
                  <UIcon name="i-heroicons-check-circle-20-solid" class="h-6 w-5 flex-none text-[#7568FF]"
                         aria-hidden="true"/>
                  {{ feature }}
                </li>
              </ul>
            </div>
            <a :href="tier.href" :aria-describedby="tier.id"
               class="bg-[#1C5ED3] text-white shadow-sm mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7568FF]">{{
                tier.name === 'Free' ? 'Get your Free Plan' : 'Get started'
              }}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="relative isolate pt-24 min-h-[30vh]">
      <div class="absolute inset-x-0 top-[50%] translate-y-[-50%] -z-10 transform-gpu overflow-hidden opacity-5"
           aria-hidden="true">
        <NuxtImg class="md:w-[50%] w-full" src="/header-logo.svg"/>
      </div>
      <div class="container px-6 lg:px-8">
        <div
            class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pr-8 lg:pt-4 pb-24">
            <div class="lg:max-w-lg">
              <h2 class="mt-2 text-3xl text-white font-bold tracking-tight sm:text-4xl">Start Track Your
                Business
                Expenses Today</h2>
              <p class="mt-6 text-lg leading-8 text-[#596780]">Are you ready to make your business more organized? Join
                Us
                Now!</p>
            </div>
            <a href="#"
               class="rounded-[22px] inline-block mt-16 bg-[#1C5ED3] px-7 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C5ED3]">Join
              Us Now!</a>
          </div>
          <div>
            <NuxtImg src="/last-banner.svg"
                     alt="Banner screenshot"
                     class="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 mb-[-20px]"/>
          </div>
        </div>
      </div>
    </div>
    <footer class="relative bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="container px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="space-y-8">
            <NuxtImg class="h-7" src="/footer-logo.svg"
                     alt="EDM Logo"/>
            <p class="text-sm leading-6 text-gray-600">Data visualization, and expense management
              for your business.</p>
          </div>
          <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div class="md:grid xl:justify-items-end md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-gray-900">Product</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in footerNavigation.product" :key="item.name">
                    <a :href="item.href" class="text-sm leading-6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in footerNavigation.company" :key="item.name">
                    <a :href="item.href" class="text-sm leading-6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:grid xl:justify-items-end md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-gray-900">Resources</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in footerNavigation.resources" :key="item.name">
                    <a :href="item.href" class="text-sm leading-6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-semibold leading-6 text-gray-900">Follow Us</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in footerNavigation.follow" :key="item.name">
                    <a :href="item.href" class="text-sm leading-6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-16 pb-24 border-t border-gray-900/10 pt-8 md:flex justify-between sm:mt-20 lg:mt-24">
          <div
              class="flex items-center mb-6 md:mb-0 justify-center space-x-4 text-sm font-semibold leading-6 text-slate-500">
            <a class="text-[#1A202C]" href="https://blog.everydaymoney.app/privacy-policy">Privacy policy</a>
            <div class="h-4 w-px bg-slate-500/60"></div>
            <a class="text-[#1A202C]" href="#">Terms & Conditions</a>
            <div class="h-4 w-px bg-slate-500/60"></div>
            <a class="text-[#1A202C]" href="#">Cookie Policy</a>
          </div>
          <p class="text-xs leading-5 text-center md:text-right text-gray-700">&copy; 2024 Everydaymoney. All rights
            reserved.</p>
        </div>
      </div>
    </footer>
    <div class="bg-gray-100 py-6 flex flex-col justify-center">
      <div v-if="cookie"
           class="max-w-screen-lg mx-auto fixed bg-white inset-x-5 p-5 bottom-[10px] rounded-lg drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between">
        <div class="w-full">This website uses cookies to ensure you get the best experience on our website.</div>
        <div class="flex gap-4 items-center flex-shrink-0">
          <!-- setTimeout is for demo purposes only. Remove it & add to cookies
               so that the popup won't appear next time they load. -->
          <button @click="cookie = false"
                  class="text-indigo-600 focus:outline-none hover:underline">Decline
          </button>
          <button @click="cookie = false"
                  class="bg-indigo-500 px-5 py-2 text-white rounded-md hover:bg-indigo-700 focus:outline-none">Allow
            Cookies
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/* import {definePageMeta} from "nuxt/dist/pages/runtime";

 definePageMeta({
 colorMode: 'light',
})*/
import {Dialog, DialogPanel, RadioGroup, RadioGroupLabel, RadioGroupOption} from "@headlessui/vue";
import {useStore} from "~/store";
import {storeToRefs} from 'pinia'

const carouselRef = ref()
const store = useStore()
const {cookie} = storeToRefs(store)


onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 3000)
})
const {vScrollSpyLink, vScrollSpyActive} = useScrollSpy()
const navigation = [
  {name: 'About Us', href: 'about'},
  {name: 'How it Works', href: 'how-it-works'},
  {name: 'Pricing', href: 'pricing'},
]

const howTos = [
  {title: 'Register your Spend.In account.', img: 'how-1'},
  {title: 'Fill in the list of your business expenses.', img: 'how-2'},
  {title: 'Done, let’s continue the work.', img: 'how-3'},
]

const features = [
  {
    name: 'Sustain your financial runway with efficient OpEx management',
    description: 'Efficient OpEx management to keep your business running smoothly.',
    icon: 'wallet-check',
  },
  {
    name: 'Gain insights and control over your day-to-day expenses',
    description: 'Understand and control your day-to-day expenses.',
    icon: 'eye',
  },
  {
    name: 'Plan for the future with accurate expense forecasts',
    description: '',
    icon: 'status-up',
  },
]

const carouselItems = [
  {
    title: "It’s just incredible!",
    subtitle:
        "It’s just 1 month since I’m using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!",
    name: 'John Doe',
    position: 'Owner',
    avatar: {src: 'user1'}
  }, {
    title: "Satisfied User here!",
    subtitle:
        "Never thought that with Spend.In managing my business expenses is so easy! Been using this platform for 3 months and still counting!",
    name: 'Jane Doe',
    position: 'Marketer',
    avatar: {src: 'user2'}
  }, {
    title: "No doubt, Spending is the best!",
    subtitle:
        "The best! That’s what I want to say to this platform, didn’t know that there’s a platform to help you  manage your business expenses like this! Very recommended to you who have a big business!",
    name: 'Jon Snow',
    position: 'King',
    avatar: {src: 'user3'}
  }, {
    title: "It’s just incredible!",
    subtitle:
        "It’s just 1 month since I’m using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!",
    name: 'Doctor Fu',
    position: 'HR',
    avatar: {src: 'user1'}
  }]

const frequencies = [
  {value: 'monthly', label: 'Monthly', priceSuffix: '/month'},
  {value: 'annually', label: 'Annually', priceSuffix: '/year'},
]
const pricingTiers = [
  {
    name: 'Free',
    id: 'tier-free',
    href: '#',
    price: {monthly: '$0', annually: '$0'},
    miniDesc: 'Perfect plan to get started',
    description: 'A free plan grants you access to some cool features of Spend.In.',
    features: ['Sync across device', '5 workspace', 'Collaborate with 5 user'],
    mostPopular: false,
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    href: '#',
    price: {monthly: '$12', annually: '$288'},
    miniDesc: 'Perfect plan for professionals!',
    description: 'For professional only! Start arranging your expenses with our best templates.',
    features: [
      'Everything in Free Plan',
      'Unlimited workspace',
      'Collaborative workspace',
      'Sharing permission',
      'Admin tools',
      '100+ integrations',
    ],
    mostPopular: true,
  },
  {
    name: 'Ultimate',
    id: 'tier-ultimate',
    href: '#',
    price: {monthly: '$33', annually: '$576'},
    miniDesc: 'Best suits for great company!',
    description: 'If you a finance manager at big  company, this plan is a perfect match.',
    features: [
      'Everything in Pro Plan',
      'Daily performance reports',
      'Dedicated assistant',
      'Artificial intelligence',
      'Marketing tools & automations',
      'Advanced security',
    ],
    mostPopular: false,
  },
]


const footerNavigation = {
  product: [
    {name: 'Digital Invoice', href: '#'},
    {name: 'Insights', href: '#'},
    {name: 'Reimbursements', href: '#'},
    {name: 'Virtual Assistant', href: '#'},
    {name: 'Artificial Intelligence', href: '#'},
  ],
  company: [
    {name: 'About Us', href: '#'},
    {name: 'Newsletters', href: '#'},
    {name: 'Our Partners', href: '#'},
    {name: 'Career', href: '#'},
    {name: 'Contact Us', href: '#'},
  ],
  resources: [
    {name: 'Blog', href: 'https://blog.everydaymoney.app'},
    {name: 'Pricing', href: '#'},
    {name: 'FAQ', href: '#'},
    {name: 'Events', href: '#'},
    {name: 'Ebook & Guide', href: '#'},
  ],
  follow: [
    {name: 'LinkedIn', href: 'https://www.linkedin.com/company/everydaymoney/'},
    {name: 'X (Twitter)', href: 'https://x.com/everydaymoneyhq'},
    {name: 'Instagram', href: 'https://instagram.com/everydaymoneyhq'},
    {name: 'Facebook', href: 'https://facebook.com/everydaymoneyng'},
    {name: 'YouTube', href: 'https://www.youtube.com/channel/UCQkd3xmlhhIkdYUCvhEKvQQ'},
  ]
}
const mobileMenuOpen = ref(false)
const frequency = ref(frequencies[0])
</script>

<style>
* {
  font-family: Poppins, sans-serif;
}

body {
  @apply antialiased font-sans text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900;
}

.slider-icons {
  position: relative;
  width: 110px;
  margin: 75px auto 0;
}
</style>
