import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Typography, Paper } from "@mui/material";
import BottomBar from "../../../components/SideBar/SideBarPatient";

interface Feedback {
    data: string;
    id: string;
    idAcompanhamento: any;
    nota: number;
    texto: string;
}

const FeedbackList: React.FC = () => {
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

    const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    const fetchData = async () => {
        try {
            const response = await axios.get<Feedback[]>(
                "https://ifpi-projeto-integrador-ii.onrender.com/feedback",
                { headers }
            );
            setFeedbacks(response.data);
            console.log(response.data);

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
            <BottomBar />
            <div className="content-container">
            <h1>
                        Comentários enviados
                    </h1>

                <div
                    style={{
                        display: "flex",
                        justifyContent: 'center',
                        gap: "1rem",
                        margin: "0 auto",
                        flexWrap: "wrap",
                        maxHeight: "80vh", // Defina a altura máxima desejada
                        overflowY: "auto",  // Adiciona scroll quando necessário
                    }}
                >                   

                    {feedbacks.length === 0 ? (
                        <p>Nenhum feedback cadastrado.</p>
                    ) : (
                        <Grid container spacing={2}>
                            {feedbacks.map((feedback) => (
                                <Grid item key={feedback.id} xs={12} sm={6} md={4} lg={3}>
                                    <Paper style={{ padding: "1rem", marginBottom: "1rem" }}>
                                        <Typography variant="body1" gutterBottom>
                                            {feedback.data}
                                        </Typography>
                                        {/* <Typography variant="h6" gutterBottom>
                  ID: {feedback.id}
                </Typography> */}
                                        <Typography variant="body1" gutterBottom>
                                            Médico: {feedback.idAcompanhamento.idProfissional.nome}
                                        </Typography>
                                        <Typography variant="body1" gutterBottom>
                                            Nota: {feedback.nota}
                                        </Typography>
                                        <Typography variant="body1" gutterBottom>
                                            Texto: {feedback.texto}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </div>
            </div>
        </div>

    );
};

export default FeedbackList;
