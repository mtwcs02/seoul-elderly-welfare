import streamlit as st
import streamlit.components.v1 as components

# 페이지 제목 설정
st.set_page_config(page_title="서울시 노인복지 대시보드", layout="wide")

# 선생님이 만드신 index.html 파일을 읽어서 화면에 꽉 차게 보여줍니다.
with open("index.html", "r", encoding="utf-8") as f:
    html_data = f.read()

components.html(html_data, height=1500, scrolling=True)