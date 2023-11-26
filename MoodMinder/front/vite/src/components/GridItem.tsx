import { styled, ButtonBase, Grid, Typography, Box } from "@mui/material";
import { HiOutlineLockClosed } from 'react-icons/hi2';

const CustomButtonBase = styled(ButtonBase)({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '100%',
    height: '100%',
    fontSize: '3rem',
    padding: '1rem',
});

interface GridItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    date: string;
}

export const GridItem: React.FC<GridItemProps> = ({ icon, title, description, date }) => {
    return (
        <Grid container spacing={2}>
            <Grid item>
                <CustomButtonBase>
                    {icon}
                    <Typography variant="body2" component="div">
                        {date}
                    </Typography>
                </CustomButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    {title}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {description}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {description}
                                </Typography>
                            </div>
                                <HiOutlineLockClosed fontSize="1rem" />
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box sx={{ display: 'flex', gap: '1rem' }}>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                Remover
                            </Typography>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                Editar
                            </Typography>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                Mudar privacidade
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
