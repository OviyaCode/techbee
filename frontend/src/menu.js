import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CategoryIcon from '@mui/icons-material/Category';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
import QuizIcon from '@mui/icons-material/Quiz';
import SettingsIcon from '@mui/icons-material/Settings';

export const Menu = [
    {
        name: "Dashboard",
        icon:<DashboardIcon/>,
        fixMenu: true,
        path: "/dashboard",
        children: []
    },
    
    {
        name: "Administrator",
        icon: <AdminPanelSettingsIcon/>,
        path: "/dashboard/admin",
        children: [
            {
                name: "Create Admin",
                path: "/dashboard/admin/create",
                icon: <PersonAddIcon/>,
            }, {
                name: "Admin Details",
                path: "/dashboard/admin/list",
                icon: <RecentActorsIcon/>
            },
        ]
    },
    {
        name: "Editors",
        icon: <ManageAccountsIcon/>,
        path: "/dashboard/editor",
        children: [
           {
                name: "Editor Details",
                path: "/dashboard/editor/list",
                icon: <RecentActorsIcon/>
            },
        ]
    },
    {
        name: "Quiz Categories",
        icon: <CategoryIcon/>,
        path: "/dashboard/quiz-cat",
        children: [
            {
                name: "Create Quiz Category",
                path: "/dashboard/quiz-cat/create",
                icon: <PlaylistAddCheckCircleIcon/>
            }, {
                name: "Quiz Category List",
                path: "/dashboard/quiz-cat/list",
                icon: <ListAltIcon/>
            },
        ]
    },
    {
        name: "Questions",
        icon: <PsychologyAltIcon/>,
        path: "/dashboard/questions",
        children: [
            {
                name: "Create Questions",
                path: "/dashboard/questions/create",
                icon: <QuizIcon/>
            }, {
                name: "Questions List",
                path: "/dashboard/questions/list",
                icon: <ListAltIcon/>
            },
        ]
    },
    {
        name: "Results",
        icon: <NoteAltIcon/>,
        path: "/dashboard/results",
        children: [
            {
                name: "Results recorded",
                path: "/dashboard/results/record",
                icon: <NoteAltIcon/>
            },
        ]
    },
    {
        name: "Settings",
        icon: <SettingsIcon/>,
        path: "/dashboard/results",
        children: [
            {
                name: "Update Password",
                path: "/dashboard/settings/password-update",
                icon: <SettingsIcon/>
            },
        ]
    },
    
]