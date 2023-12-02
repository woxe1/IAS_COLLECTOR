import yaml

print("Hello")



def read_config(file_path):
    with open(file_path) as file:
        config = yaml.safe_load(file)
    return config

if __name__ == "__main__":
    config_file_path = './config.yml'
    config = read_config(config_file_path)
    