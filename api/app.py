from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return "API Online"

@app.route("/dados")
def dados():
    return jsonify({
        "status": "success",
        "mensagem": "API funcionando perfeitamente",
        "autor": "Lucas Schwertz"
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
