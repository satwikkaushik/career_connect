import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const fetchAnalytics = createAsyncThunk(
      "jobs/fetchAnalytics",
      async (_, { rejectWithValue }) => {
            try {
                  const response = await axios.get(`${SERVER_URL}/analytics`);
                  return response.data;
            } catch (error) {
                  return rejectWithValue(error.response.data);
            }
      }
);

export const fetchJobs = createAsyncThunk(
      "jobs/fetchJobs",
      async (_, { getState, rejectWithValue }) => {
            try {
                  const { userRole } = getState().jobs;
                  const endpoint =
                        userRole === "admin" ? "/student" : "/uni/jobs";
                  const response = await axios.get(`${SERVER_URL}${endpoint}`);
                  return response.data;
            } catch (error) {
                  return rejectWithValue(error.response.data);
            }
      }
);

const initialState = {
      userRole: null, // Changed from 'admin' to null
      userAuthenticated: false, // Add authentication status
      analytics: [
            { id: 1, applicants: 1000, eligible: 1200, selected: 10 },
            { id: 2, applicants: 500, eligible: 600, selected: 2 },
            { id: 3, applicants: 50, eligible: 100, selected: 10 },
            { id: 4, applicants: 10, eligible: 140, selected: 3 },
            { id: 5, applicants: 90, eligible: 500, selected: 7 },
            { id: 6, applicants: 900, eligible: 1400, selected: 70 },
            { id: 7, applicants: 90, eligible: 300, selected: 50 },
      ],
      jobs: [
            {
                  id: 1,
                  title: "Software Engineer",
                  company: "Google",
                  location: "Mountain View, CA",
                  jobType: "Full-Time",
                  salary: "$120,000 - $150,000",
                  deadline: "March 30, 2025",
                  skills: ["React", "JavaScript", "Tailwind CSS", "Redux"],
                  description:
                        "Develop scalable UI components using React.js and Tailwind CSS.",
                  eligibility:
                        "Candidates must have a Bachelor's degree in Computer Science or related field with 1+ years of experience.",
                  responsibilities: [
                        "Develop and maintain React-based UI components.",
                        "Optimize web applications for performance and scalability.",
                        "Collaborate with cross-functional teams to enhance UX.",
                  ],
                  applyLink: "https://careers.google.com",
                  applied: false,
                  missed: false,
            },
            {
                  id: 2,
                  title: "Backend Developer",
                  company: "Amazon",
                  location: "Seattle, WA",
                  jobType: "Full-Time",
                  salary: "$130,000 - $160,000",
                  deadline: "April 15, 2025",
                  skills: ["Node.js", "Express", "MongoDB", "AWS"],
                  description:
                        "Work with Node.js, Express, and MongoDB to develop robust APIs.",
                  eligibility:
                        "Bachelor's degree in CS and 2+ years experience in backend development.",
                  responsibilities: [
                        "Design and develop scalable backend systems.",
                        "Implement RESTful APIs and microservices.",
                        "Optimize database performance and security.",
                  ],
                  applyLink: "https://amazon.jobs",
                  applied: false,
                  missed: true,
            },
            {
                  id: 3,
                  title: "Data Analyst",
                  company: "Microsoft",
                  location: "Redmond, WA",
                  jobType: "Contract",
                  salary: "$90,000 - $110,000",
                  deadline: "May 10, 2025",
                  skills: ["Python", "SQL", "Power BI", "Data Visualization"],
                  description:
                        "Analyze data trends and provide insights using Python and SQL.",
                  eligibility:
                        "Bachelor’s degree in Statistics, Mathematics, or related field.",
                  responsibilities: [
                        "Collect and analyze large datasets.",
                        "Develop dashboards for data visualization.",
                        "Provide business insights through statistical models.",
                  ],
                  applyLink: "https://careers.microsoft.com",
                  applied: true,
                  missed: false,
            },
            {
                  id: 4,
                  title: "Full Stack Developer",
                  company: "Meta",
                  location: "Menlo Park, CA",
                  jobType: "Internship",
                  salary: "$80,000 - $110,000",
                  deadline: "June 5, 2025",
                  skills: ["MERN Stack", "GraphQL", "Firebase"],
                  description:
                        "Build and maintain full-stack applications using MERN stack.",
                  eligibility:
                        "Pursuing a degree in Computer Science or related field.",
                  responsibilities: [
                        "Develop frontend and backend components.",
                        "Integrate third-party APIs and authentication systems.",
                        "Ensure responsiveness and scalability of applications.",
                  ],
                  applyLink: "https://www.metacareers.com",
                  applied: false,
                  missed: false,
            },
            {
                  id: 5,
                  title: "DevOps Engineer",
                  company: "Netflix",
                  location: "Los Gatos, CA",
                  jobType: "Full-Time",
                  salary: "$140,000 - $180,000",
                  deadline: "July 20, 2025",
                  skills: ["CI/CD", "Docker", "Kubernetes", "AWS"],
                  description:
                        "Manage CI/CD pipelines and deploy scalable cloud solutions.",
                  eligibility:
                        "Bachelor’s degree in Computer Science or equivalent.",
                  responsibilities: [
                        "Implement automation and monitoring solutions.",
                        "Manage cloud infrastructure with Kubernetes and Docker.",
                        "Optimize deployment processes for efficiency.",
                  ],
                  applyLink: "https://jobs.netflix.com",
                  applied: false,
                  missed: false,
            },
            {
                  id: 6,
                  title: "Cybersecurity Analyst",
                  company: "IBM",
                  location: "New York, NY",
                  jobType: "Full-Time",
                  salary: "$100,000 - $130,000",
                  deadline: "August 12, 2025",
                  skills: ["Security Analysis", "Network Security", "SOC"],
                  description:
                        "Ensure security compliance and protect systems from cyber threats.",
                  eligibility:
                        "Bachelor’s degree in Cybersecurity or related field.",
                  responsibilities: [
                        "Monitor security incidents and investigate breaches.",
                        "Develop security policies and implement best practices.",
                        "Conduct vulnerability assessments and penetration testing.",
                  ],
                  applyLink: "https://www.ibm.com/careers",
                  applied: false,
                  missed: false,
            },
            {
                  id: 7,
                  title: "Machine Learning Engineer",
                  company: "Tesla",
                  location: "Palo Alto, CA",
                  jobType: "Full-Time",
                  salary: "$150,000 - $200,000",
                  deadline: "September 5, 2025",
                  skills: ["Machine Learning", "Deep Learning", "TensorFlow"],
                  description:
                        "Develop AI models for autonomous vehicles using deep learning.",
                  eligibility:
                        "Master’s degree in AI, Machine Learning, or related field.",
                  responsibilities: [
                        "Develop machine learning algorithms for autonomous systems.",
                        "Train and fine-tune deep learning models.",
                        "Collaborate with software engineers for real-world deployment.",
                  ],
                  applyLink: "https://www.tesla.com/careers",
                  applied: false,
                  missed: false,
            },
      ],
      analyticsStatus: "idle",
      analyticsError: null,
      jobsStatus: "idle",
      jobsError: null,
};

const jobSlice = createSlice({
      name: "jobs",
      initialState,
      reducers: {
            addJob: (state, action) => {
                  if (state.userRole === "admin") {
                        state.jobs.push(action.payload);
                  }
            },
            removeJob: (state, action) => {
                  if (state.userRole === "admin") {
                        state.jobs = state.jobs.filter(
                              (job) => job.id !== action.payload
                        );
                  }
            },
            updateJob: (state, action) => {
                  if (state.userRole === "admin") {
                        const index = state.jobs.findIndex(
                              (job) => job.id === action.payload.id
                        );
                        if (index !== -1) {
                              state.jobs[index] = action.payload;
                        }
                  }
            },
            setUserRole: (state, action) => {
                  state.userRole = action.payload;
                  state.userAuthenticated = true;
            },
            logoutUser: (state) => {
                  state.userRole = null;
                  state.userAuthenticated = false;
            },
            updateAnalytics: (state, action) => {
                  const { id, applicants, eligible, selected } = action.payload;
                  const analyticIndex = state.analytics.findIndex(
                        (analytic) => analytic.id === id
                  );
                  if (analyticIndex !== -1) {
                        state.analytics[analyticIndex].applicants = applicants;
                        state.analytics[analyticIndex].eligible = eligible;
                        state.analytics[analyticIndex].selected = selected;
                  }
            },
            incrementApplicants: (state, action) => {
                  const jobAnalytics = state.analytics.find(
                        (analytic) => analytic.id === action.payload
                  );
                  if (jobAnalytics) {
                        jobAnalytics.applicants += 1;
                  }
            },
            incrementEligible: (state, action) => {
                  const jobAnalytics = state.analytics.find(
                        (analytic) => analytic.id === action.payload
                  );
                  if (jobAnalytics) {
                        jobAnalytics.eligible += 1;
                  }
            },
            incrementSelected: (state, action) => {
                  const jobAnalytics = state.analytics.find(
                        (analytic) => analytic.id === action.payload
                  );
                  if (jobAnalytics) {
                        jobAnalytics.selected += 1;
                  }
            },
      },
      extraReducers: (builder) => {
            builder
                  .addCase(fetchAnalytics.pending, (state) => {
                        state.analyticsStatus = "loading";
                  })
                  .addCase(fetchAnalytics.fulfilled, (state, action) => {
                        state.analyticsStatus = "succeeded";
                        state.analyticsError = null;
                        if (Array.isArray(action.payload)) {
                              state.analytics = action.payload;
                        }
                  })
                  .addCase(fetchAnalytics.rejected, (state, action) => {
                        state.analyticsStatus = "failed";
                        state.analyticsError = action.payload;
                  })
                  .addCase(fetchJobs.pending, (state) => {
                        state.jobsStatus = "loading";
                  })
                  .addCase(fetchJobs.fulfilled, (state, action) => {
                        state.jobsStatus = "succeeded";
                        state.jobsError = null;
                        if (Array.isArray(action.payload)) {
                              state.jobs = action.payload;
                        }
                  })
                  .addCase(fetchJobs.rejected, (state, action) => {
                        state.jobsStatus = "failed";
                        state.jobsError = action.payload;
                  });
      },
});

export const {
      addJob,
      removeJob,
      updateJob,
      updateAnalytics,
      incrementApplicants,
      incrementEligible,
      incrementSelected,
      setUserRole,
      logoutUser, // Export new action
} = jobSlice.actions;

export default jobSlice.reducer;
