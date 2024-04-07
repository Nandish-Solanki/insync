from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
from app.config import Config

class Model:
    def __init__(self):
        self.tokenizer = AutoTokenizer.from_pretrained(Config.MODEL_NAME)
        self.model = AutoModelForSeq2SeqLM.from_pretrained(Config.MODEL_NAME)

    def predict(self, text):
        inputs = self.tokenizer(text, return_tensors="pt")
        outputs = self.model.generate(**inputs, max_new_tokens=Config.MAX_NEW_TOKENS)
        return self.tokenizer.decode(outputs[0], skip_special_tokens=True)