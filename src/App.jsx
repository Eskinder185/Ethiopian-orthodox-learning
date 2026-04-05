import { Navigate, Route, Routes } from 'react-router-dom'
import { paths } from './constants/paths.js'
import Layout from './components/layout/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import LearnHomePage from './pages/learn/LearnHomePage.jsx'
import ScripturePage from './pages/learn/ScripturePage.jsx'
import TeachingsPage from './pages/learn/TeachingsPage.jsx'
import ChurchKnowledgePage from './pages/learn/ChurchKnowledgePage.jsx'
import LiturgyPage from './pages/learn/LiturgyPage.jsx'
import PracticeHomePage from './pages/practice/PracticeHomePage.jsx'
import MezmurPage from './pages/practice/MezmurPage.jsx'
import TselotPage from './pages/practice/TselotPage.jsx'
import LanguageHomePage from './pages/language/LanguageHomePage.jsx'
import AmharicAlphabetPage from './pages/language/AmharicAlphabetPage.jsx'
import WritingPracticePage from './pages/language/WritingPracticePage.jsx'
import PronunciationPage from './pages/language/PronunciationPage.jsx'
import CalendarHomePage from './pages/calendar/CalendarHomePage.jsx'
import TodayPage from './pages/calendar/TodayPage.jsx'
import FastingPage from './pages/calendar/FastingPage.jsx'
import HolidaysPage from './pages/calendar/HolidaysPage.jsx'
import ProgressHomePage from './pages/progress/ProgressHomePage.jsx'
import StatsPage from './pages/progress/StatsPage.jsx'
import PracticeTrackingPage from './pages/progress/PracticeTrackingPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import AboutPage from './pages/AboutPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />

        <Route path="learn">
          <Route index element={<LearnHomePage />} />
          <Route path="scripture" element={<ScripturePage />} />
          <Route path="teachings" element={<TeachingsPage />} />
          <Route path="church-knowledge" element={<ChurchKnowledgePage />} />
          <Route path="liturgy" element={<LiturgyPage />} />
        </Route>

        <Route path="practice">
          <Route index element={<PracticeHomePage />} />
          <Route path="mezmur" element={<MezmurPage />} />
          <Route path="tselot" element={<TselotPage />} />
          <Route
            path="liturgy"
            element={<Navigate to={paths.learn.liturgy} replace />}
          />
          <Route
            path="memorization"
            element={<Navigate to={paths.practice.index} replace />}
          />
        </Route>

        <Route path="language">
          <Route index element={<LanguageHomePage />} />
          <Route path="amharic-alphabet" element={<AmharicAlphabetPage />} />
          <Route path="writing" element={<WritingPracticePage />} />
          <Route path="pronunciation" element={<PronunciationPage />} />
        </Route>

        <Route path="calendar">
          <Route index element={<CalendarHomePage />} />
          <Route path="today" element={<TodayPage />} />
          <Route path="fasting" element={<FastingPage />} />
          <Route path="holidays" element={<HolidaysPage />} />
        </Route>

        <Route path="progress">
          <Route index element={<ProgressHomePage />} />
          <Route path="stats" element={<StatsPage />} />
          <Route path="tracking" element={<PracticeTrackingPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
