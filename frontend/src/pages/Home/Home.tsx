import { useDispatch, useSelector } from "react-redux"
import type { RootState, AppDispatch } from "../../store"
import { setInputText, fetchAnswer } from "../../store/aiSlice"
import styles from "./Home.module.css"

function Home() {
    const dispatch = useDispatch<AppDispatch>()
    const { inputText, answer, loading, error } = useSelector((state: RootState) => state.ai)

    const handleAsk = () => {
        if (inputText.trim()) {
            dispatch(fetchAnswer(inputText))
        }
    }

    return (
        <section className={styles.homeContainer}>
            <div className={styles.contentWrapper}>
                <h2 className={styles.title}>AI Study Assistant</h2>
                <p className={styles.subtitle}>
                    Tu asistente educativo que responde preguntas, explica temas y te ayuda a aprender más rápido.
                </p>

                <textarea
                    placeholder="Escribe una pregunta o tema para la IA..."
                    value={inputText}
                    onChange={(e) => dispatch(setInputText(e.target.value))}
                    className={styles.textarea}
                    rows={4}
                />

                <button
                    className={styles.button}
                    onClick={handleAsk}
                    disabled={loading || !inputText.trim()}
                >
                    {loading ? "Pensando..." : "Preguntar"}
                </button>

                {error && <p className={styles.error}>⚠️ {error}</p>}

                {answer && (
                    <div className={styles.answerBox}>
                        <h3 className={styles.answerTitle}>Respuesta de la IA:</h3>
                        <p className={styles.answerText}>{answer}</p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Home