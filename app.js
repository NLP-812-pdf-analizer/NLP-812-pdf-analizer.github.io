// Ждем, пока DOM будет полностью загружен
document.addEventListener('DOMContentLoaded', function() {
    
    // Используем fetch API для загрузки JSON-файла
    fetch('data.json')
        .then(function(response) {
            // Преобразуем ответ в формат JSON
            return response.json();
        })
        .then(function(data) {
            // Инициализация Cytoscape.js после загрузки данных
            const cy = cytoscape({
                // Контейнер для отображения графа
                container: document.getElementById('cy'),
                
                // Загружаем данные из JSON-файла
                elements: data.elements,
                
                // Настройки стиля для узлов и рёбер
                style: [
                    {
                        selector: 'node',
                        style: {
                            'background-color': '#666',
                            'label': 'data(label)', // Отображаем текст из свойства 'label' узла
                            'text-valign': 'center',
                            'color': 'white',
                            'text-outline-width': 2,
                            'text-outline-color': '#666'
                        }
                    },
                    {
                        selector: 'edge',
                        style: {
                            'width': 3,
                            'line-color': '#ccc',
                            'target-arrow-color': '#ccc',
                            'target-arrow-shape': 'triangle',
                            'label': 'data(label)', // Отображаем текст из свойства 'label' ребра
                            'font-size': '10px',
                            'text-background-opacity': 1,
                            'text-background-color': '#fff',
                            'text-background-padding': 2,
                            'curve-style': 'bezier'
                        }
                    }
                ],
                
                // Настройки макета (Layout) для расположения узлов
                layout: {
                    name: 'cose', // Используем алгоритм "cose" (Force-directed)
                    animate: true,
                    padding: 10,
                    nodeDimensionsIncludeLabels: true
                }
            });

        })
        .catch(function(error) {
            console.error('Ошибка при загрузке JSON-файла:', error);
        });

});
