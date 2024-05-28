<script setup lang="ts">
import CalendarWidget from "~/components/calendar.vue";
import {createApp} from "vue"

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

// semester result
const showingResultModal = ref(false);
const modalResultTitle = ref("");
const modalResults = ref([]);

const results = ref([
    { code: "CSE 111", title: "Object Oriented Programming", grade: "A+" },
    { code: "EEE 220", title: "Digital Electronics", grade: "B" },
    { code: "MAT 120", title: "Coordinate Geometry", grade: "C-" },
]);

const fall2023 = ref([
    { code: "CSE 112", title: "Data Structures", grade: "A" },
    { code: "EEE 221", title: "Digital Signal Processing", grade: "B+" },
    { code: "MAT 121", title: "Calculus", grade: "B-" },
]);

const spring2024 = ref([
    { code: "CSE 111", title: "Object Oriented Programming", grade: "A+" },
    { code: "EEE 220", title: "Digital Electronics", grade: "B" },
    { code: "MAT 120", title: "Coordinate Geometry", grade: "C-" },
]);

const showResultModal = (semester) => {
    modalResultTitle.value = `${semester.charAt(0).toUpperCase() + semester.slice(1)} Semester Results`;
    modalResults.value = semester === "fall2023" ? fall2023.value : spring2024.value;
    showingResultModal.value = true;
};

const closeResultModal = () => {
    showingResultModal.value = false;
};

const getCardColor = (grade) => {
    switch (grade) {
        case "A+":
            return "bg-green-100 text-green-800";
        case "B":
            return "bg-yellow-100 text-yellow-800";
        case "C-":
            return "bg-red-100 text-red-800";
        default:
            return "";
    }
};

const showingAlertModal = ref(false);
const modalAlertTitle = ref("");
const modalAlertMessage = ref("");

const showAlertModal = (buttonName, message) => {
    modalAlertTitle.value = `${buttonName} Alert`;
    modalAlertMessage.value = message;
    showingAlertModal.value = true;
};

const closeAlertModal = () => {
    showingAlertModal.value = false;
};
</script>

<template>
    <div class="flex w-full bg-blue-100 h-full">
        <div class="flex w-full flex-col">
            <div class="flex pt-4 pl-4 pr-1">
                <div class="w-full p-2">
                    <div class="w-full rounded-2xl bg-white shadow p-4 space-y-2 overflow-hidden h-64">
                        <h1 class="text-2xl font-semibold text-gray-700">Timeline</h1>
                        <div class="flex">
                            <CalendarWidget></CalendarWidget>
                            <div class="">
                                <h1 class="text-xl">Upcoming:</h1>
                                <div class="ml-4 mt-2 gap-2 flex flex-col overflow-y-auto h-32" style="scrollbar-width: thin;">
                                    <div v-for="event in upcomingEvents" :key="event.Date" class="text-sm bg-blue-300 rounded p-1">
                                        <h1 class="text-blue-900">{{ event.Date }}</h1>
                                        <h1 class="text-white">{{ event.Title }}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Semester result -->
                <div class="w-full p-2">
                    <div class="w-full rounded-2xl bg-white overflow-hidden shadow p-4 space-y-8 h-64">
                        <div class="flex items-center justify-between">
                            <h1 class="text-2xl font-semibold text-gray-700">Semester Results</h1>
                            <div class="relative">
                                <select
                                        @change="showResultModal($event.target.value)"
                                        class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold appearance-none cursor-pointer"
                                >
                                    <option value="" disabled selected>Select Semester</option>
                                    <option class="cursor-pointer" value="fall2023">Fall 2023</option>
                                    <option class="cursor-pointer" value="spring2024">Spring 2024</option>
                                </select>
                                <div
                                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                                >
                                    <svg
                                            class="fill-current h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                    >
                                        <path
                                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-3 gap-4">
                            <div
                                    v-for="(course, index) in results"
                                    :key="index"
                                    :class="getCardColor(course.grade)"
                                    class="rounded-lg p-4 flex flex-col justify-between"
                            >
                                <div>
                                    <h2 class="text-lg font-semibold mb-2">{{ course.code }}</h2>
                                    <p class="text-sm truncate-text">{{ course.title }}</p>
                                </div>
                                <div>
                                    <p class="text-lg font-bold">{{ course.grade }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Result Modal -->
                    <div v-if="showingResultModal" class="fixed z-10 inset-0 overflow-y-auto">
                        <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div class="fixed inset-0 transition-opacity">
                                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>
                            <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                            <div
                                    class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                                    role="dialog" aria-modal="true" aria-labelledby="modal-headline"
                            >
                                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div class="sm:flex sm:items-start">
                                        <div
                                                class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10"
                                        >
                                            <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                                />
                                            </svg>
                                        </div>
                                        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                                {{ modalResultTitle }}
                                            </h3>
                                            <div class="mt-2">
                                                <table class="w-full">
                                                    <thead>
                                                    <tr>
                                                        <th class="px-4 py-2 text-left">Course Code</th>
                                                        <th class="px-4 py-2 text-left">Course Title</th>
                                                        <th class="px-4 py-2 text-left">Grade</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr v-for="(course, index) in modalResults" :key="index">
                                                        <td class="border px-4 py-2">{{ course.code }}</td>
                                                        <td class="border px-4 py-2">{{ course.title }}</td>
                                                        <td class="border px-4 py-2">{{ course.grade }}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                    <button
                            @click="closeResultModal"
                            type="button"
                            class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    >
                      Okay
                    </button>
                  </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Quick menu -->
                <div class="w-full p-2">
                    <div class="w-full rounded-2xl bg-white overflow-hidden shadow p-4 space-y-2 h-64">
                        <h1 class="text-2xl font-semibold text-gray-700">Quick Menu</h1>
                        <div class="flex gap-2">
                            <div class="w-44 h-44 bg-gray-300 rounded-2xl flex flex-col justify-between p-4">
                                <div>
                                    <h1 class="text-xl font-semibold text-gray-800 mb-2">Enrollment</h1>
                                    <p class="text-sm text-gray-600">You can only enroll at start of each semester.</p>
                                </div>
                                <div>
                                    <button
                                            @click="showAlertModal('Enrollment', 'Please visit the Registrar office for enrollment.')"
                                            class="bg-gray-500 text-white px-4 py-2 rounded-md"
                                    >
                                        Enroll
                                    </button>
                                </div>
                            </div>
                            <div class="w-44 h-44 bg-blue-300 rounded-2xl flex flex-col justify-between p-4">
                                <div>
                                    <h1 class="text-xl font-semibold text-blue-900 mb-2">Payment Form</h1>
                                    <p class="text-sm text-blue-900">Get the payment form for this semester.</p>
                                </div>
                                <div>
                                    <button
                                            @click="showAlertModal('Payment Form', 'Please visit the Bursar office for payment.')"
                                            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                                    >
                                        Pay Now
                                    </button>
                                </div>
                            </div>
                            <div class="w-44 h-44 bg-blue-300 rounded-2xl flex flex-col justify-between p-4">
                                <div>
                                    <h1 class="text-xl font-semibold text-blue-900 mb-2">Transcript</h1>
                                    <p class="text-sm text-blue-900">Get an overview of your academic records.</p>
                                </div>
                                <div>
                                    <button
                                            @click="showAlertModal('Transcript', 'Your transcript will be emailed to you shortly.')"
                                            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-20"
                                    >
                                        Get
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Alert Modal -->
                    <div v-if="showingAlertModal" class="fixed z-10 inset-0 overflow-y-auto">
                        <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div class="fixed inset-0 transition-opacity">
                                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>
                            <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                            <div
                                    class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                                    role="dialog" aria-modal="true" aria-labelledby="modal-headline"
                            >
                                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div class="sm:flex sm:items-start">
                                        <div
                                                class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10"
                                        >
                                            <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                                />
                                            </svg>
                                        </div>
                                        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <h3 class="text-lg leading-6 font-medium text-red-900" id="modal-headline">
                                                {{ modalAlertTitle }}
                                            </h3>
                                            <div class="mt-2">
                                                <p class="text-sm leading-5 text-red-500">
                                                    {{ modalAlertMessage }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                    <button
                            @click="closeAlertModal"
                            type="button"
                            class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    >
                      Okay
                    </button>
                  </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Courses -->
            <div class="h-2/3 flex flex-col gap-3 p-4 pl-6">
                <h1 class="text-4xl font-semibold text-gray-700">Courses</h1>
                <div class="grid grid-cols-5 gap-2" style="scrollbar-width: thin;">
                    <course
                            v-for="course in courses"
                            class=""
                            :key="course.code"
                            :title="course.name"
                            :code="course.code"
                            :color="course.color"
                            :teacher="course.teacher"
                            :classes="course.classTimes"
                            :credit="course.credit"
                    ></course>
                </div>
            </div>
        </div>

        <!-- Feed -->
        <div class="max-h-fit overflow-hidden border-l-2 ml-2 border-blue-200 p-2 w-[30rem]">
            <div class="flex h-12 items-center justify-between">
                <h1 class="text-2xl font-semibold text-gray-700 pl-2">Your Feed</h1>
                <div class="flex rounded-2xl text-xs font-semibold text-gray-500 p-0.5 overflow-hidden">
                    <h1 class="bg-rose-500 text-rose-900 px-3 py-1">Events</h1>
                    <h1 class="bg-sky-500 text-sky-900 px-3 py-1">Notices</h1>
                    <h1 class="bg-green-500 text-green-900 px-3 py-1">Academics</h1>
                </div>
            </div>

            <div class=" w-full p-2 h-[95%] overflow-y-scroll" style="scrollbar-width: thin;">
                <div v-for="event in feed" :key="event.title" class="my-2 w-full rounded bg-slate-100 p-2">
                    <div>
                        <div class="flex items-center justify-between">
                            <div
                                    class="flex px-2 items-center justify-center rounded capitalize text-gray-800 p-.5"
                                    :class="{
                  'bg-rose-400': event.type === 'event',
                  'bg-sky-400': event.type === 'notice',
                  'bg-green-400': event.type === 'academic',
                }"
                            >
                                <h1
                                        :class="{
                    'text-rose-900': event.type === 'event',
                    'text-sky-900': event.type === 'notice',
                    'text-green-900': event.type === 'academic',
                  }"
                                >
                                    {{ event.type }}
                                </h1>
                            </div>
                            <h1 class="text-right text-xs text-gray-500">{{ event.date }}</h1>
                        </div>

                        <h1 class="mb-3 text-lg">{{ event.title }}</h1>
                    </div>
                    <p class="mb-3 text-sm text-gray-700">{{ event.content }}</p>
                </div>
            </div>
        </div>

<!--        &lt;!&ndash; AI &ndash;&gt;-->
<!--        <div class="absolute right-2 bottom-2 w-fit rounded-full bg-blue-300 p-1" @click="aiOpen = !aiOpen">-->
<!--            <Icon size="3rem" name="mdi:chat-outline" />-->
<!--            <div-->
<!--                    class="absolute bg-slate-500 transition-all duration-500 w-[20rem] h-[35rem] bottom-[4rem] right-[0rem]"-->
<!--                    v-if="aiOpen"-->
<!--            >-->
<!--                <PucAi v-on:aiclose="aiOpen = false"></PucAi>-->
<!--            </div>-->
<!--        </div>-->
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
