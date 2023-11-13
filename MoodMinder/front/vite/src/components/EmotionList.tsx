import Paper from '@mui/material/Paper';
import { HiOutlineFaceSmile } from "react-icons/hi2";
import { GridItem } from './GridItem';


const ComplexGrid = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            <Paper
                sx={{
                    p: 2,
                    maxWidth: 500,
                    flexGrow: 1,
                    backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
                }}
            >
                <GridItem
                    icon={<HiOutlineFaceSmile />}
                    title="aaaaa"
                    description="bbbbbb"
                    date="13/11/2023"
                />
            </Paper>

            <Paper
                sx={{
                    p: 2,
                    maxWidth: 500,
                    flexGrow: 1,
                    backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
                }}
            >
                <GridItem
                    icon={<HiOutlineFaceSmile />}
                    title="aaaaa"
                    description="bbbbbb"
                    date="13/11/2023"
                />
            </Paper>


            <Paper
                sx={{
                    p: 2,
                    maxWidth: 500,
                    flexGrow: 1,
                    backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
                }}
            >
                <GridItem
                    icon={<HiOutlineFaceSmile />}
                    title="aaaaa"
                    description="bbbbbb"
                    date="13/11/2023"
                />
            </Paper>

        </div>
    );
};

export default ComplexGrid;
