from transformers import pipeline

assistant = pipeline("text-generation", model="TinyLlama/TinyLlama-1.1B-Chat-v1.0")

def get_ai_response(question: str) -> str:
    """
    Genera una respuesta educativa completa en español o inglés.
    Asegura que la respuesta no se corte abruptamente.
    """
    if not question.strip():
        return "Por favor, escribí una pregunta o tema para que pueda ayudarte."

    prompt = (
        "Eres un asistente educativo que explica temas con claridad, detalle y finaliza sus ideas. "
        "Responde en el mismo idioma que la pregunta. "
        f"Pregunta: {question}\n"
        "Respuesta extensa y clara:"
    )

    result = assistant(
        prompt,
        max_new_tokens=450,
        temperature=0.7,
        top_p=0.9,
        do_sample=True,
        pad_token_id=50256
    )[0]["generated_text"]

    response = result[len(prompt):].strip()

    if not response.endswith(('.', '!', '?')):
        continuation = assistant(
            f"{response}\nContinúa y finaliza la idea claramente.",
            max_new_tokens=80,
            temperature=0.7,
            top_p=0.9,
            do_sample=True,
            pad_token_id=50256
        )[0]["generated_text"]

        response += " " + continuation[len(response):].strip()

    return response