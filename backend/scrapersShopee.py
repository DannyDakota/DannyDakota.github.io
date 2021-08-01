# from selenium import webdriver
# from webdriver_manager.chrome import ChromeDriverManager
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.common.by import By
# from selenium.webdriver.support import expected_conditions as EC

# options = webdriver.ChromeOptions()
# options.add_argument('--headless')
# options.add_argument('start-maximized')
# options.add_argument('disable-infobars')
# options.add_argument('--disable-extensions')
# driver = webdriver.Chrome(ChromeDriverManager().install())
# driver.get('https://shopee.sg/search?keyword=shirt')
# WebDriverWait(driver, 20).until(EC.element_to_be_clickable(
#     (By.XPATH, "//div[@class='shopee-modal__container']//button[text()='English']"))).click()
# print([my_element.text for my_element in WebDriverWait(driver, 20).until(
#     EC.visibility_of_all_elements_located((By.XPATH, "//span[text()='RM']//following::span[1]")))])
# print("Program Ended")


import requests
import sys

product_list = []


def myFunction():
    Shopee_url = 'https://shopee.sg'
    #   todo
    # keyword_search = str(sys.argv[1])
    keyword_search = 'shirt'
    headers = {
        'User-Agent': 'Chrome',
        'Referer': '{}search?keyword={}'.format(Shopee_url, keyword_search)
    }
    url = 'https://shopee.sg/api/v2/search_items/?by=relevancy&keyword={}&limit=5&newest=0&order=desc&page_type=search'.format(
        keyword_search)
    # Shopee API request
    r = requests.get(url, headers=headers).json()
    # Shopee scraping script
    indiv_product = []

    for item in r['items']:
        name = keyword_search.title() + ' ' + item['name']
        image = "https://cf.shopee.sg/file/" + item['image']
        price = item["price_min"] / 100000
        rating = item['item_rating']['rating_star']
        numReviews = 0
        for i in range(0, len(item['item_rating']['rating_count'])):
            numReviews = numReviews + item['item_rating']['rating_count'][i]
        brand = item['brand']
        stock = item['stock']
        website = 'www.shopee.sg'

        if isinstance(price, float) == False:
            continue
        else:
            indiv_product.append(name)
            indiv_product.append(image)
            indiv_product.append(price)
            indiv_product.append(rating)
            indiv_product.append(numReviews)
            indiv_product.append(brand)
            indiv_product.append(stock)
            indiv_product.append(website)
            indiv_product.append("shopee.sg/search?keyword=" + keyword_search)

            product_list.append(indiv_product)
            indiv_product = []
    return product_list


print(myFunction())
