import xlrd


class xlsMapper:
    def __init__(file_path):
            workbook = xlrd.open_workbook("./field_mapping.xls")
            sheet = workbook.sheet_by_name("tg_1")
            cell_value = sheet.cell_value(0,0)
            pass



if __name__ == "__main__":

    print(cell_value)