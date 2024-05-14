<script setup lang="ts">
let aiOpen = ref(false)
import PucAi from "~/components/puc-ai.vue";

const feed = [
  {
    title: "Classes closed due to flooding.",
    content: "yesterday due to overheating university emergency water system trigered. and all the classes ware flooded due to that so all classes will remain close tommowro",
    date: "12/05/2024",
    type: "notice",

  },

  {
    title: "Library Book Sale",
    content: "The university library will be hosting a book sale on May 20th from 10 AM to 4 PM. Get great deals on gently used books and support the library.",
    date: "15/05/2024",
    type: "event"
  },
  {
    title: "Midterm Exam Schedule",
    content: "The midterm exam schedule for the Spring semester has been posted on the university website. Check your respective course pages for details.",
    date: "05/05/2024",
    type: "academic"
  },
  {
    title: "Campus Safety Awareness Week",
    content: "Join us for Campus Safety Awareness Week from May 8th to May 12th. Various workshops and activities will be held to promote a safer campus environment.",
    date: "02/05/2024",
    type: "event"
  },
  {
    title: "Graduation Ceremony Details",
    content: "The graduation ceremony for the Class of 2024 will be held on June 10th at 10 AM in the main auditorium. Detailed information has been sent to all graduating students.",
    date: "20/05/2024",
    type: "academic"
  },
  {
    title: "Power Outage Scheduled",
    content: "There will be a scheduled power outage on campus from 8 PM to 12 AM on May 25th for maintenance work. Please plan accordingly.",
    date: "18/05/2024",
    type: "notice"
  },
  {
    title: "Career Fair",
    content: "Don't miss the annual Career Fair on June 2nd from 10 AM to 3 PM in the Student Union. Over 50 companies will be present to recruit for internships and full-time positions.",
    date: "28/05/2024",
    type: "event"
  },
  {
    title: "Student Research Symposium",
    content: "The university is hosting the annual Student Research Symposium on May 15th. Students are invited to present their research projects and compete for prizes.",
    date: "10/05/2024",
    type: "academic"
  },
  {
    title: "Campus Shuttle Service Disruption",
    content: "The campus shuttle service will be temporarily suspended from May 20th to May 25th due to maintenance work. Please make alternative transportation arrangements during this period.",
    date: "16/05/2024",
    type: "notice"
  },
  {
    title: "Art Exhibition Opening",
    content: "The university art gallery is hosting the opening of a new exhibition titled 'Expressions' on June 1st at 6 PM. All are welcome to attend and appreciate the works of our talented student artists.",
    date: "28/05/2024",
    type: "event"
  },
  {
    title: "Parking Lot Maintenance",
    content: "The main parking lot will be closed for resurfacing from June 1st to June 5th. Please use the alternative parking areas during this time.",
    date: "25/05/2024",
    type: "notice"
  },
]

let courses = [
    {
        "name": "Object Oriented Programming",
        "code": "CSE 1115",
        "color": "blue",
        "teacher": "Minhaz",
        "credit": 3,
        "classTimes": ["Mon 10:00 AM - 11:30 AM", "Wed 10:00 AM - 11:30 AM", "Fri 10:00 AM - 11:30 AM"]
    },
    {
        "name": "Object Oriented Programming Lab",
        "code": "CSE 1116",
        "color": "sky",
        "teacher": "Minhaz",
        "credit": 1.5,
        "classTimes": ["Tue 1:00 PM - 2:30 PM", "Thu 1:00 PM - 2:30 PM"]
    },
    {
        "name": "Internet Programming",
        "code": "CSE 3210",
        "color": "emerald",
        "teacher": "Tamim Hossain",
        "credit": 1.5,
        "classTimes": ["Mon 2:00 PM - 3:30 PM", "Wed 2:00 PM - 3:30 PM"]
    },
    {
        "name": "Digital Electronics & Pulse Technique",
        "code": "EEE 2201",
        "color": "amber",
        "teacher": "Sarith Ghosh",
        "credit": 3,
        "classTimes": ["Tue 11:30 AM - 1:00 PM", "Thu 11:30 AM - 1:00 PM", "Sat 10:00 AM - 11:30 AM"]
    },
    {
        "name": "Digital Electronics & Pulse Technique Lab",
        "code": "EEE 2202",
        "color": "amber",
        "teacher": "Sarith Ghosh",
        "credit": 1.5,
        "classTimes": ["Mon 3:00 PM - 4:30 PM", "Wed 3:00 PM - 4:30 PM"]
    },
    {
        "name": "Communicative English",
        "code": "ENG 1102",
        "color": "rose",
        "teacher": "Shreyoshi Paul",
        "credit": 3,
        "classTimes": ["Tue 9:00 AM - 10:30 AM", "Thu 9:00 AM - 10:30 AM", "Sat 1:00 PM - 2:30 PM"]
    },
    {
        "name": "Coordinate Geometry & Vector Analysis",
        "code": "MAT 1205",
        "color": "violet",
        "teacher": "Kollol",
        "credit": 3,
        "classTimes": ["Mon 1:00 PM - 2:30 PM", "Wed 1:00 PM - 2:30 PM", "Fri 1:00 PM - 2:30 PM"]
    },
    {
        "name": "Numerical Methods",
        "code": "MAT 2304",
        "color": "teal",
        "teacher": "Tonni Dhoom",
        "credit": 1.5,
        "classTimes": ["Wed 11:00 AM - 12:30 PM"]
    },
    {
        "name": "Bangladesh Studies",
        "code": "SSC 1101",
        "color": "lime",
        "teacher": "Muntasir",
        "credit": 2,
        "classTimes": ["Tue 11:00 AM - 12:30 PM", "Thu 11:00 AM - 12:30 PM"]
    },
  {
    "name": "Bangladesh Studies",
    "code": "SSC 1101",
    "color": "lime",
    "teacher": "Muntasir",
    "credit": 2,
    "classTimes": ["Tue 11:00 AM - 12:30 PM", "Thu 11:00 AM - 12:30 PM"]
  }
];

let upcomingEvents = [
  {Title: "Mid Term Exam", Date: "11/05/2024"},
  {Title: "Course Registration for Fall Semester", Date: "15/05/2024"},
  {Title: "Graduate Research Symposium", Date: "20/05/2024"},
  {Title: "Career Fair", Date: "22/05/2024"},
  {Title: "Final Exams Week", Date: "28/05/2024"},
  {Title: "Commencement Ceremony", Date: "05/06/2024"},
  {Title: "Summer Session Begins", Date: "10/06/2024"},
  {Title: "Student Orientation for New Students", Date: "15/06/2024"},
  {Title: "Deadline for Thesis Submission", Date: "20/06/2024"},
  {Title: "Academic Advising Week", Date: "25/06/2024"},
  {Title: "Faculty Research Seminar", Date: "30/06/2024"},
  {Title: "Internship Fair", Date: "05/07/2024"},
  {Title: "Study Abroad Information Session", Date: "10/07/2024"},
  {Title: "Workshop on Academic Writing", Date: "15/07/2024"},
  {Title: "Undergraduate Research Symposium", Date: "20/07/2024"},
  {Title: "Scholarship Application Deadline", Date: "25/07/2024"},
  {Title: "Freshman Convocation", Date: "30/07/2024"},
  {Title: "Graduate Student Orientation", Date: "05/08/2024"},
  {Title: "Faculty Book Launch Event", Date: "10/08/2024"},
  {Title: "Deadline for Adding/Dropping Courses", Date: "15/08/2024"}
];

const results = [
    { code: 'CSE 111', title: 'Object Oriented Programming', grade: 'A+' },
    { code: 'EEE 220', title: 'Digital Electronics', grade: 'B' },
    { code: 'MAT 120', title: 'Coordinate Geometry', grade: 'C-' }
];
const getCardColor = (grade: any) => {
    switch (grade) {
        case 'A+':
            return 'bg-green-100 text-green-800';
        case 'B':
            return 'bg-yellow-100 text-yellow-800';
        case 'C-':
            return 'bg-red-100 text-red-800';
        default:
            return '';
    }
};
</script>

<template>
  <div class="flex w-full bg-blue-100 h-full">
    <div class="flex w-full flex-col ">
      <div class="flex pt-4 pl-4 pr-1">
        <div class="w-full p-2 ">
          <div class="w-full rounded-2xl bg-white shadow p-4 space-y-2 overflow-hidden h-60">
            <h1 class="text-2xl font-semibold text-gray-700">Timeline</h1>
            <div class="flex w-full">
              <!--                    <div class="w-full flex justify-center"><img class="h-full" src="~/assets/academic-calendar.png" alt="calendar"></div>-->
              <ImageModal
                  imageLink="https://cdn.discordapp.com/attachments/1087010612892151899/1239342159161983098/academic-calendar.png?ex=66448d14&is=66433b94&hm=9ae77a9440a2f8104b9af3d15162aea7b581db9e59d46bbc7dcb716a76d8ea54&"></ImageModal>
              <div class=" w-full ">
                <h1 class="text-xl">Upcoming:</h1>
                <div class="ml-4 mt-2 gap-2 flex flex-col overflow-y-auto h-32 " style="scrollbar-width: thin;">
                  <div v-for="event in upcomingEvents" :key="event.Date" class="text-sm bg-blue-300 rounded p-1">
                    <h1 class="text-blue-900">{{ event.Date }}</h1>
                    <h1 class="text-white">{{ event.Title }}</h1>

                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
        <div class="w-full p-2 ">
          <div class="w-full rounded-2xl bg-white overflow-hidden shadow p-4 space-y-8 h-60 ">
            <div class="flex items-center justify-between">
              <h1 class="text-2xl font-semibold text-gray-700">Semester Results</h1>
              <div class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                Spring 2024
              </div>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div v-for="(course, index) in results" :key="index" :class="getCardColor(course.grade)" class="rounded-lg p-4 flex flex-col justify-between">
                <div><h2 class="text-lg font-semibold mb-2">{{ course.code }}</h2>
                  <p class="text-sm truncate-text">{{ course.title }}</p></div>
                <div>
                  <p class="text-lg font-bold">{{ course.grade }}</p>
                </div>


              </div>
            </div>

          </div>
        </div>
        <div class="w-full  p-2">
          <div class="w-full rounded-2xl bg-white overflow-hidden shadow p-4 space-y-2 h-60">
            <h1 class="text-2xl font-semibold text-gray-700">Quick Menu</h1>
            <div class="flex gap-2">
              <div class="w-44 h-44 bg-gray-300 rounded-2xl flex flex-col justify-between p-4">
                <div>
                  <h1 class="text-xl font-semibold text-gray-800 mb-2">Enrollment</h1>
                  <p class="text-sm text-gray-600">You can only enroll at start of each semester.</p>
                </div>
                <div>
                  <button class="bg-gray-500  text-white px-4 py-2 rounded-md">Enroll</button>
                </div>
              </div>
              <div class="w-44 h-44 bg-blue-300 rounded-2xl flex flex-col justify-between p-4">
                <div>
                  <h1 class="text-xl font-semibold text-blue-900 mb-2">Payment Form</h1>
                  <p class="text-sm text-blue-900">Get the payment form for this semester.</p>
                </div>
                <div>
                  <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Pay Now</button>
                </div>
              </div>
              <div class="w-44 h-44 bg-blue-300 rounded-2xl flex flex-col justify-between p-4">
                <div>
                  <h1 class="text-xl font-semibold text-blue-900 mb-2">Transcript</h1>
                  <p class="text-sm text-blue-900">Get an over view of your academic records.</p>
                </div>
                <div>
                  <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-20">Get</button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
      <!--            Courses-->
      <div class="h-2/3 flex flex-col gap-3 p-4 pl-6">
        <h1 class="text-4xl font-semibold text-gray-700">Courses</h1>
        <div class="grid grid-cols-5 gap-2 " style="scrollbar-width: thin;">
          <course v-for="course in courses" class="" :key="course.code" :title="course.name" :code="course.code"
                  :color="course.color" :teacher="course.teacher"
                  :classes="course.classTimes" :credit="course.credit"
          ></course>
        </div>

      </div>


    </div>
    <!--        Feed-->
    <div class="max-h-fit overflow-hidden border-l-2 ml-2 border-blue-200 p-2 w-[30rem]">
      <div class="flex h-12 items-center justify-between">
        <h1 class="text-2xl font-semibold text-gray-700 pl-2">Your Feed</h1>
        <div class="flex rounded-2xl text-xs font-semibold text-gray-500 p-0.5 overflow-hidden">
          <h1 class="bg-rose-500 text-rose-900 px-3 py-1">Events</h1>
          <h1 class="bg-sky-500 text-sky-900 px-3 py-1">Notices</h1>
          <h1 class="bg-green-500 text-green-900 px-3 py-1">Academics</h1>
        </div>
      </div>

      <div CLASS=" w-full p-2 h-[95%]  overflow-y-scroll " style="scrollbar-width: thin;">
        <div v-for="event in feed" :key="event.title" class="my-2 w-full rounded bg-slate-100 p-2">
          <div>
            <div class="flex items-center justify-between">
              <div class="flex px-2 items-center justify-center rounded capitalize text-gray-800 p-.5"
                   :class="{'bg-rose-400': event.type === 'event', 'bg-sky-400': event.type === 'notice', 'bg-green-400': event.type === 'academic'}">
                <h1 :class="{'text-rose-900': event.type === 'event', 'text-sky-900': event.type === 'notice', 'text-green-900': event.type === 'academic'}">{{ event.type }}</h1>
              </div>
              <h1 class="text-right text-xs text-gray-500">{{ event.date }}</h1>
            </div>


            <h1 class="mb-3 text-lg" >{{ event.title }}</h1>
          </div>
          <p class="mb-3 text-sm text-gray-700">{{ event.content }}</p>
        </div>
      </div>

    </div>


    <!--      AI-->
    <div class="absolute right-2 bottom-2 w-fit rounded-full bg-blue-300 p-1" @click="aiOpen = !aiOpen">
      <Icon size="3rem" name="mdi:chat-outline"/>
      <div class="absolute bg-slate-500 transition-all duration-500 w-[20rem] h-[35rem] bottom-[4rem] right-[0rem]"
           v-if="aiOpen">
        <PucAi v-on:aiclose="aiOpen = false"></PucAi>
      </div>
    </div>
  </div>
</template>

<style scoped>
.truncate-text {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
