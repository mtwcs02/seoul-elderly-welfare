import streamlit as st
import streamlit.components.v1 as components

# 1. 화면 꽉 차게 설정
st.set_page_config(page_title="서울시 노인복지 대시보드", layout="wide")

# 2. 선생님이 만드신 index.html 읽기
try:
    with open("index.html", "r", encoding="utf-8") as f:
        html_content = f.read()
    
    # 3. 화면에 표시 (높이는 대시보드 길이에 맞춰 2500정도로 넉넉히)
    components.html(html_content, height=2500, scrolling=True)
except FileNotFoundError:
    st.error("index.html 파일을 찾을 수 없습니다. 파일명을 확인해 주세요!")
