import { Navigate, Route, Routes } from 'react-router-dom'
import { paths } from './constants/paths.js'
import Layout from './components/layout/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import StartHerePage from './pages/StartHerePage.jsx'
import LearnHomePage from './pages/learn/LearnHomePage.jsx'
import ScripturePage from './pages/learn/ScripturePage.jsx'
import TeachingsPage from './pages/learn/TeachingsPage.jsx'
import ChurchLifeHistoryPage from './pages/learn/ChurchLifeHistoryPage.jsx'
import ChurchYearPage from './pages/learn/ChurchYearPage.jsx'
import LiturgyPage from './pages/learn/LiturgyPage.jsx'
import PracticeHomePage from './pages/practice/PracticeHomePage.jsx'
import ChantsPracticePage from './pages/practice/ChantsPracticePage.jsx'
import PrayerPage from './pages/practice/PrayerPage.jsx'
import InstrumentPracticePage from './pages/practice/InstrumentPracticePage.jsx'
import LanguageHomePage from './pages/language/LanguageHomePage.jsx'
import AmharicAlphabetPage from './pages/language/AmharicAlphabetPage.jsx'
import WritingPracticePage from './pages/language/WritingPracticePage.jsx'
import PronunciationPage from './pages/language/PronunciationPage.jsx'
import CalendarHomePage from './pages/calendar/CalendarHomePage.jsx'
import TodayPage from './pages/calendar/TodayPage.jsx'
import EthiopianMonthsPage from './pages/calendar/EthiopianMonthsPage.jsx'
import FastingPage from './pages/calendar/FastingPage.jsx'
import FeastsHolyDaysPage from './pages/calendar/FeastsHolyDaysPage.jsx'
import SeasonalGuidesPage from './pages/calendar/SeasonalGuidesPage.jsx'
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
        <Route path="start-here" element={<StartHerePage />} />
        <Route path="about" element={<AboutPage />} />

        <Route path="learn">
          <Route index element={<LearnHomePage />} />
          <Route path="scripture" element={<ScripturePage />} />
          <Route path="teachings" element={<TeachingsPage />} />
          <Route path="church-life-history" element={<ChurchLifeHistoryPage />} />
          <Route path="church-year" element={<ChurchYearPage />} />
          <Route path="liturgy" element={<LiturgyPage />} />
          <Route
            path="church-knowledge"
            element={<Navigate to={paths.learn.churchLifeHistory} replace />}
          />
        </Route>

        <Route path="practice">
          <Route index element={<PracticeHomePage />} />
          <Route path="prayer" element={<PrayerPage />} />
          <Route path="chants" element={<ChantsPracticePage />} />
          <Route path="mezmur" element={<Navigate to={paths.practice.chants} replace />} />
          <Route path="werb" element={<Navigate to={paths.practice.chants} replace />} />
          <Route path="instruments" element={<InstrumentPracticePage />} />
          <Route path="language">
            <Route index element={<LanguageHomePage />} />
            <Route path="amharic-alphabet" element={<AmharicAlphabetPage />} />
            <Route path="writing" element={<WritingPracticePage />} />
            <Route path="pronunciation" element={<PronunciationPage />} />
          </Route>
          <Route path="tselot" element={<Navigate to={paths.practice.prayer} replace />} />
          <Route
            path="liturgy"
            element={<Navigate to={paths.learn.liturgy} replace />}
          />
          <Route
            path="memorization"
            element={<Navigate to={paths.practice.index} replace />}
          />
        </Route>

        <Route path="language" element={<Navigate to={paths.practice.language.index} replace />} />
        <Route
          path="language/amharic-alphabet"
          element={<Navigate to={paths.practice.language.alphabet} replace />}
        />
        <Route path="language/writing" element={<Navigate to={paths.practice.language.writing} replace />} />
        <Route
          path="language/pronunciation"
          element={<Navigate to={paths.practice.language.pronunciation} replace />}
        />

        <Route path="calendar">
          <Route index element={<CalendarHomePage />} />
          <Route path="today" element={<TodayPage />} />
          <Route path="ethiopian-months" element={<EthiopianMonthsPage />} />
          <Route path="fasting" element={<FastingPage />} />
          <Route path="feasts-holy-days" element={<FeastsHolyDaysPage />} />
          <Route path="seasons" element={<SeasonalGuidesPage />} />
          <Route path="holidays" element={<Navigate to={paths.calendar.feastsHolyDays} replace />} />
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
