from webdriver_manager.chrome import ChromeDriverManager
from logging import exception
from selenium import webdriver
from selenium.common.exceptions import *
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.proxy import Proxy, ProxyType
import sys
import random
import os

# path = os.getcwd()
# print(path)
webdriver_path = './backend/chromedriver'
# webdriver_path = './chromedriver'
Lazada_url = 'http://www.lazada.sg'

search_item = str(sys.argv[1])

# search_item = 'candle'

options = webdriver.ChromeOptions()
options.add_argument('--headless')
options.add_argument('start-maximized')
options.add_argument('disable-infobars')
options.add_argument('--disable-extensions')
options.add_experimental_option("excludeSwitches", ["disable-popup-blocking"])

PROXY = 'http://gate.smartproxy.com:7000'


prox = Proxy()
prox.proxy_type = ProxyType.MANUAL
prox.autodetect = False
capabilities = webdriver.DesiredCapabilities.CHROME
prox.http_proxy = PROXY
prox.ssl_proxy = PROXY
prox.add_to_capabilities(capabilities)
driver = webdriver.Chrome(webdriver_path, options=options)
driver.get(Lazada_url)
search_bar = driver.find_element_by_id('q')
search_bar.send_keys(search_item)
search_bar.submit()


item_prices = driver.find_elements_by_xpath(
    '//*[@id="root"]/div/div[2]/div[1]/div/div[1]/div[2]/*/div/div/div[2]/div[3]/span')
item_titles = driver.find_elements_by_class_name('GridItem__title___8JShU')
item_images = driver.find_elements_by_xpath(
    '//*[@id="root"]/div/div[2]/div[1]/div/div[1]/div[2]/*/div/div/div[1]/div/a/img')
link_to_product = driver.find_elements_by_xpath(
    '//*[@id="root"]/div/div[2]/div[1]/div/div[1]/div[2]/*/div/div/div[1]/div/a')

link_list = []

x = 0

while x < 20:
    for product in link_to_product:
        link = product.get_attribute("href")
        link_list.append(link)

    titles_list = []
    prices_list = []
    image_list = []

    for title in item_titles:
        titles_list.append(title.text.replace(',', ''))

    for price in item_prices:
        formatPrice = price.text.replace(',', '')
        prices_list.append(float(formatPrice[1:]))

    i = 0
    for image in item_images:
        if (i < 3):
            img_src = image.get_attribute('src')
            image_list.append(img_src)
            img_src = ""
            i = i + 1
        else:
            image_list.append(
                "https://laz-img-cdn.alicdn.com/images/ims-web/TB12_ByawFY.1VjSZFnXXcFHXXa.png")

    indiv_product = []
    product_list = []

    i = 0
    while i <= len(titles_list) - 1:

        indiv_product.append(search_item.title() + ' ' + titles_list[i])

        indiv_product.append(image_list[i])

        indiv_product.append(prices_list[i])

        indiv_product.append(5)

        indiv_product.append(random.randint(0, 10))

        indiv_product.append(titles_list[i].split()[0])

        indiv_product.append(random.randint(0, 50))

        indiv_product.append(link_list[i])

        indiv_product.append("Lazada")

        product_list.append(indiv_product)
        indiv_product = []
        i = i + 1

    ratings = []
    x = x + 1

print(product_list)
